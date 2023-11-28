---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# Github Actions сценарий для развертывания на Github Pages

## Deployment

Использует [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) Github Action для размещения сайта на ветке `gh-pages` того же репозитория, что автоматически делает сайт доступный по адресу `https://youGitHubUsername.github.io/my-vue-webapp` (если ваш проект и репозиторий называется `my-vue-webapp`).

- Создайте в репозитории ветку с названием `gh-pages`
- Перейдите в раздел "Settings" вашего репозитория
- В разделе "Code and automation" на боковой панели нажмите Pages.
- В разделе "Build and deployment" в пункте "Source" выберите "Deploy from a branch".
- В разделе "Build and deployment" под заголовком "Branch" воспользуйтесь раскрывающимся меню ветки и выберите нужную ветку - `gh-pages`.

Более подробно: 

- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pages](https://docs.github.com/ru/pages/quickstart)

## Настройка `base` в Vite конфиге

Если у вас не кастомный домен, то в `vite.config.ts` необходимо прописать название вашего репозитория в качестве `base`, чтобы сайт был доступен по вышеуказанной ссылке:

```js
export default defineConfig({
  base: "/my-vue-webapp/",
});
```

Если у вас кастомный домен (типа `yourname.com`), то этот параметр не нужен.