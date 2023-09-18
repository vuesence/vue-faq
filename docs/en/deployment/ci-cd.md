# CI/CD

::: details What is CI/CD?

CI/CD (Continuous Integration, Continuous Delivery) is a technology for automating the build, testing and deployment of a project under development.

In other words, the process of transition of code lying in a repository into a working product on a cloud server, for example.

CI/CD elements are useful not only for a devops engineer, but also for a simple front-end developer, allowing him after git commit/push code changes to get a working site, for example, on GitHub Pages without additional actions.

Main tools for CI/CD: GitHub Actions, GitLab CI/CD, Jenkins, Trevis

:::

::: details GitHub Actions

GitHub Actions are popular and convenient, so it is recommended to learn them for use in both pet and large commercial projects.

Your code should be on GitHub, of course.

Add the `.github/workflows/deploy.yaml` file to the root of your repository

This will have the GitHub Actions instructions in it.

Sample configuration file for this project (Vue-Faq)

```yaml
name: Build and Deploy
on:
  push:
    branches: [main].
  workflow_dispatch:
    # branches: [ "main", "development" ]
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

      - run: pnpm docs:build

      - name: List website files
        run: ls docs/.vitepress/dist

      - name: Deploy 🚀
        uses: jamesIves/github-pages-deploy-action@v4
        with:
          folder: docs/.vitepress/dist
          branch: gh-pages
```

After each push to the repository, the project will be built and the new version will be deployed to GitHub pages.

In general, various useful automation is possible. You can have several environments (dev, staging, prod), and deploy to the right one with your own parameters. You can backup the previous version of the site. You can build sites with different UI themes during the build.

:::
