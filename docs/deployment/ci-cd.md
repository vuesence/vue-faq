# CI/CD

::: details Что такое CI/CD?

CI/CD (Continuous Integration, Continuous Delivery — непрерывная интеграция и доставка) — это технология автоматизации билда, тестирования и развертывания разрабатываемого проекта.

Другими словами, процесс перехода лежащего в репозитории кода в рабочий продукт на облачном сервере, например.

Элементы CI/CD полезны не только девопс инженеру, но и простому фронтендеру, позволяя ему после git commit/push изменений кода получить рабочий сайт, например, на GitHub Pages без дополнительных действий.

Основные инструменты для CI/CD: GitHub Actions, GitLab CI/CD, Jenkins, Trevis

:::

::: details GitHub Actions - пример деплоя на GitHub Pages

`GitHub Actions` популярны и удобны, так что советуется их изучить для применения как в пет, так и в больших коммерческих проектах.

Ваш код должен быть на GitHub, естественно.

Добавьте в корень репозитория файл `.github/workflows/deploy.yaml`

В нем будут GitHub Actions инструкции.

Образец конфигурационного файла данного проекта (Vue-Faq)

```yaml
# .github/workflows/deploy.yaml

name: Build and Deploy
on:
  push:
    branches: [main]
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
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: docs/.vitepress/dist
          branch: gh-pages
```

После каждого пуша в репозиторий будет происходить сборка проекта и деплой новой версии сайта на GitHub Pages.

В данном случае используется три GitHub Actions: `actions/checkout@v3` для загрузка вашего кода из репозитория из ветки `main`, `pnpm/action-setup@v2` для установки `pnpm` менеджера, `JamesIves/github-pages-deploy-action@v4` для загрузки билда в `gh-pages` ветку вашего репозитория (она должна уже быть создана). Ваш GitHub проект должен быть настроен, чтобы GitHub Pages брали файлы из этой ветки (`Settings->Pages`).

В документации GitHub Pages описан другой способ автоматического деплоя через Github Actions, но `JamesIves/github-pages-deploy-action@v4`значительно упрощает жизнь.

:::

::: details GitHub Actions - пример деплоя на удаленный сервер по SSH

Более интересный случай полезной автоматизации процесса CI/CD.

У нас есть несколько окружений (`dev`, `staging`, `prod`) и нужно деплоить в ручном режиме (используя `workflow_dispatch`) в нужное по выбору на удаленный сервер со своими параметрами. Плюс автоматически деплоится на `dev` при `git push`.

Для каждого окружения в проекте есть свой `.env` файл - `.env.dev`, `.env.staging` и `.env.prod`, и каждому окружению соответствует своя директория для деплоя на сервере - `dev.your-site.com`, `staging.your-site.com` и `your-site.com`.

Кроме того, там же на сервере есть директория `backup` с поддиректориями `dev`, `staging` и `prod`. При деплое мы будем бэкапить установленную версию в соответствующую директорию и хранить там 5 последних бэкапов для возможности отката при необходимости.

Кроме того, мы будем генерировать файл `build.json` с текущей датой и временем и, возможно, иной информацией. Он нужен как для информационной цели, так и позволяет решить проблему кэширования браузером файла `index.html` и показывания пользователю старой версии сайта после его фактического апдейта. Одно из решений - вебсайт при загрузке приложения скачивает этот файл и проверяет дату в нем с той, которую он ранее сохранил в localStorage. Если они не совпадают, то сайт форсирует перезагрузку `index.html` и сохраняет новое значение таймстемпа. Получается прозрачное для пользователя и надежное обновление вебсайта.

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

Используются три новых Github Actions: `appleboy/ssh-action@master` для выполнения команд на удаленном хосте, `easingthemes/ssh-deploy@main` для загрузки файлов на удаленный хост, и `snickerbockers/submodules-init@v4` - потому что наш проект использует Git Submodules

Кроме того надо прописать в Github Secrets SERVER_SSH_KEY_ROME - закрытый ключ для SSH доступа на удаленный хост.

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
