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

# Установка

## Установка через `create vue-webapp`

При данном способе можно выбрать, какие опции будут установлены:

```sh
$ pnpm create vue-webapp

√ Project name: ... my-vue-project
√ Add a Splash screen? ... no / yes
√ Make it PWA (adds service worker and manifest)? ... no / yes
√ Add Open Graph meta tags? ... no / yes
√ Add Google Analytics code? ... no / yes
√ Add Github Action Workflow for publishing it on GitHub Pages? ... no / yes
√ Select application layout » MainLayout
√ Select navigation drawer » SimpleDrawer
√ Select webapp navbar » MantineSimpleNavbar
√ Select webapp header » MantineSimpleHeader
√ Select webapp footer » MantineRichFooter
√ Add API layer (REST)? ... no / yes
√ Add JSON-RPC adapter? ... no / yes

Scaffolding project in /home/ubuntu/my-vue-project... 
```

:::details "Молчаливая" установка 

Возможно установка без ручного ввода параметров с указанием конфигурационного файла с опциями:

```bash
pnpm create vue-webapp -c config.json
// or 
pnpm create vue-webapp --config config.json
``` 

Формат файла `config.json`:

```json
{
    "projectName": "my-vue-project",
    "splashScreen": false,
    "pwa": true,
    "openGraph": false,
    "googleAnalytics": false,
    "githubActionsGithubPagesWorkflow": true,
    "layout": "MainLayout",
    "navigationDrawer": "SimpleDrawer",
    "navbar": "MantineSimpleNavbar",
    "header": "MantineSimpleHeader",
    "footer": "MantineRichFooter",
    "api": true,
    "jsonRpc": false,
    "overwrite": true
}
```
Параметр `overwrite` означает перезаписывание содержимого уже существующей директории. Может принимать значения "yes", "no" и "ignore".

Также, команда

```bash
$ pnpm create vue-webapp .
```
создаст проект в текущей директории.
:::

Данный метод создаст проект только с выбранными компонентами и функционалом.

### Инициализация и запуск веб приложения

```sh
$ cd my-vue-project
$ pnpm i
$ pnpm dev
```

Результат в браузере:

![](/images/vue-webapp/webapp-start.png)

## Установка из репозитория

При данном способе будет установлено всё, однако непосредственно в проекте будет подключена не вся функциональность. Удобно для ознакомления и тестирования всех доступных компонент и функционала.

```sh
$ git clone https://github.com/vuesence/vue-webapp.git
$ cd vue-webapp
$ pnpm i
$ pnpm dev
```

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>