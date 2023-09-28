# Github Actions

::: details What are GitHub Actions?

GitHub Actions are the most popular and convenient way to automate build, test and deployment, so it is recommended to learn them for both pet and large commercial projects.

Your code should be on GitHub, naturally.

Add a file `.github/workflows/deploy.yaml` (the name of the file itself can be anything) to the root of your repository

It will contain the GitHub Actions instructions.

:::

::: details GitHub Actions - sample deploy on GitHub Pages

Sample configuration file of this project (Vue-Faq) with deployment to Github Pages

```yaml
# .github/workflows/deploy.yaml

name: Build and Deploy
on:
  push:
    branches: [main].
permissions:
  contents: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        id: pnpm-install
        with:
          version: 8.5.0
          run_install: false

      - name: Install dependencies
        run: pnpm install

      - run: pnpm build

      - name: Deploy 🚀
        uses: jamesIves/github-pages-deploy-action@v4
        with:
          folder: docs/.vitepress/dist
          branch: gh-pages
```

After each push to the `main` branch of the repository, the project will be built and a new version of the site will be deployed to GitHub Pages.

In this case, three GitHub Actions are used: `actions/checkout@v3` to upload your code from the repository from the `main` branch, `pnpm/action-setup@v2` to install the `pnpm` manager, `JamesIves/github-pages-deploy-action@v4` to upload the build to the `gh-pages` branch of your repository (it must already be created). Your GitHub project must be configured for GitHub Pages to grab files from this branch (`Settings->Pages`).

The GitHub Pages documentation describes another way to auto-deploy via Github Actions, but `JamesIves/github-pages-deploy-action@v4` makes life much easier.

:::

::: details GitHub Actions - an example of an SSH-based deploy to a remote server

A more interesting case of useful CI/CD process automation.

We have several environments (`dev`, `staging`, `prod`) and need to manually (using `workflow_dispatch`) deploy to a remote server of our choice with its own parameters. Plus it is automatically deployed to `dev` when `git push`.

Each environment in the project has its own `.env` file - `.env.dev`, `.env.staging` and `.env.prod`, and each environment has its own directory to deploy to the server - `dev.your-site.com`, `staging.your-site.com` and `your-site.com`.

There is also a `backup` directory on the server with subdirectories `dev`, `staging` and `prod`. At deployment we will backup the installed version to the corresponding directory and store the last 5 backups there to be able to rollback if necessary.

In addition, we will generate a `build.json` file with the current date and time and possibly other information. It is needed both for informational purposes and to solve the problem of the browser caching the `index.html` file and showing the user the old version of the site after the actual update. One solution is for the website to download this file when loading the application and check the date in it against the one it previously saved in localStorage. If they don't match, the site forces a reload of `index.html` and saves the new timestamp value. The result is a user-transparent and reliable update of the website.

```js
const localStorageName = "BUILD_DATE";
fetch("/build.json?version").then((response) => {
  response.json().then((buildData) => {
    if (buildData.date !== localStorage.getItem(localStorageName)) {
      console.log("Updating. New version:", buildData.date);
      localStorage.setItem(localStorageName, buildData.date);
      window.location.reload();
      throw new Error("Exiting for update");
    }
  });
});
```

Three new Github Actions are used: `appleboy/ssh-action@master` to execute commands on the remote host, `easingthemes/ssh-deploy@main` to upload files to the remote host, and `snickerbockers/submodules-init@v4` because our project uses Git Submodules

In addition, we need to put `SERVER_SSH_KEY` in Github Secrets - the private key for SSH access to the remote host.

::: details deploy.yaml

```yaml
# .github/workflows/deploy.yaml

name: Build and deploy
on:
  push:
    branches: [main]
  workflow_dispatch:
    inputs:
      target:
        description: Target
        required: true
        default: dev
        type: choice
        options:
          - dev
          - staging
          - prod

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      TARGET: ${{ inputs.target }}
      HOST: your-site.com
      TARGET_DIR: ${{ format('/var/www/your-site/{0}.your-site.com', inputs.target) }}
      PROJECT_DIR: ${{ format('{0}.your-site.com', inputs.target) }}
      REMOTE_USER: ubuntu
      SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
      ENV_FILE: ${{ format('.env.{0}', inputs.target) }}
    steps:
      - name: Setting the environment
        run: |
          echo $TARGET
          # deploy on Dev by default
          if [[ $TARGET == "" ]]
          then
            echo "TARGET_DIR=/var/www/your-site/dev.your-site.com" >> $GITHUB_ENV
            echo "PROJECT_DIR=dev.your-site.com" >> $GITHUB_ENV
            echo "ENV_FILE=.env.dev" >> $GITHUB_ENV
          fi          
          if [[ $TARGET == "prod" ]]
          then
            echo "TARGET_DIR=/var/www/your-site/your-site.com" >> $GITHUB_ENV
            echo "PROJECT_DIR=your-site.com" >> $GITHUB_ENV
          fi
      - run: |
          echo "target dir: $TARGET_DIR"
          echo "project dir: $PROJECT_DIR"
      - uses: actions/checkout@v3
        with:
          submodules: recursive

      - uses: snickerbockers/submodules-init@v4

      - uses: actions/setup-node@v3
        with:
          node-version: 20

      - uses: pnpm/action-setup@v2
        name: Install pnpm
        id: pnpm-install
        with:
          version: 8.5.0
          run_install: false

      - name: Install dependencies
        run: pnpm install

      - run: mv $ENV_FILE .env
      - run: pnpm build

      - name: Clean up the server dir
        uses: appleboy/ssh-action@master
        with:
          host: ${{ env.HOST }}
          username: ${{ env.REMOTE_USER }}
          key: ${{ env.SSH_PRIVATE_KEY }}
          envs: TARGET_DIR
          script: sudo rm -rf $TARGET_DIR; mkdir $TARGET_DIR

      - name: Transfer files
        uses: easingthemes/ssh-deploy@main
        with:
          SSH_PRIVATE_KEY: ${{ env.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ env.HOST }}
          REMOTE_USER: ${{ env.REMOTE_USER }}
        env:
          SOURCE: dist/
          TARGET: ${{ env.TARGET_DIR }}
          EXCLUDE: ".git, .github, .vscode, *.md, *.yaml, *.sql, .gitignore"

      - name: After deploy scripts
        uses: appleboy/ssh-action@master
        with:
          host: ${{ env.HOST }}
          username: ${{ env.REMOTE_USER }}
          key: ${{ env.SSH_PRIVATE_KEY }}
          envs: TARGET_DIR,REMOTE_USER,PROJECT_DIR
          script: |
            cd $TARGET_DIR
            pwd
            sudo chgrp -R www-data * .*
            backup_date=`date "+%Y-%m-%d__%H-%M-%S"`;
            printf "{\"website\": \"$PROJECT_DIR\", \"date\": \"$backup_date\"}" > build.json
            # -------------------
            root_backup_dir=`echo "/var/www/your-site/backup/$PROJECT_DIR"`;
            backup_dir=`echo "$root_backup_dir/$backup_date"`;
            mkdir $backup_dir -p;
            cp -rf $TARGET_DIR/* $backup_dir;
            sudo chgrp -R www-data $backup_dir;
            backups_remove_count=5;
            cd $backup_dir && rm -rf work logs images;
            cd $root_backup_dir && dirs_to_be_removed=`ls -dt "$root_backup_dir/"* | tail -n +$backups_remove_count`;
            rm $dirs_to_be_removed -rf;
```

:::
