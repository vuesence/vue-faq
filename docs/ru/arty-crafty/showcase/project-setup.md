---
pageClass: arty-crafty
head:
  - - meta
    - name: og:site_name
      content: Arty-Crafty - проект онлайн магазина
  - - meta
    - name: og:image
      content: /images/arty-crafty-logo.png
  - - meta
    - name: twitter:image
      content: /images/arty-crafty-logo.png
---

# Создание проекта

## Репозиторий на GitHub

Создаем репозиторий на GitHub, клонируем локально

```sh
$ git clone https://github.com/vuesence/arty-crafty.git
```

## vue-webapp

Используем, естественно, [vue-webapp](/ru/vue-webapp/) для создания скелета проекта со следующими опциями:

```sh
$ cd arty-crafty
$ pnpm create vue-webapp .

√ Project name: ... arty-crafty
√ Add a Splash screen? ... yes
√ Make it PWA (adds service worker and manifest)? ... yes
√ Add Open Graph meta tags? ... yes
√ Add Google Analytics code? ... no
√ Add Github Action Workflow for publishing it on GitHub Pages? ... yes
√ Select application layout » MainLayout
√ Select navigation drawer » TouchSlideoutDrawer
√ Select webapp navbar » MantineSimpleNavbar
√ Select webapp header » MantineSimpleHeader
√ Select webapp footer » MantineSimpleFooter
√ Add light version of i18n? ... yes
√ Add API layer (REST)? ... yes
√ Add JSON-RPC adapter? ... no
√ Current directory is not empty. Please choose how to proceed: » Ignore files and continue

Scaffolding project in \Vuesence\arty-crafty...
```

Запускаем:

```sh
$ pnpm i
$ pnpm dev
```

Работает:

![](/ru/arty-crafty/assets/images/project-setup.png)

Теперь ставим `base: "/arty-crafty/"` в `vite.config.ts`. Также надо поставить этот префикс перед путями в инъекциях `sw.js` и `splash-screen.html`, и в путях к иконкам в `manifest.json`. При хостинге со своим доменом нужно будет этот префикс убрать.

Загружаем все на GitHub.

Далее настраиваем GitHub Pages и получаем наш сайт по адресу: [https://vuesence.github.io/arty-crafty/](https://vuesence.github.io/arty-crafty/)

Сайт задеплоится сам автоматически из-за того, что у нас есть соответствующий GitHub Actions Workflow файл в проекте. Ветка `gh-pages` тоже создастся автоматически.

Теперь закомментируем подключение `service-worker.js` в файле `sw.js` - во время разработки кэширование сильно мешает. Включим его уже в продакшне.

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
