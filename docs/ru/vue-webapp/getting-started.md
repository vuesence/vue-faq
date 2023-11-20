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

✔ Project name: … my-vue-project
✔ Make it PWA ( adds service worker and manifest )? … yes
✔ Add Github Action Workflow for publishing it on GitHub Pages? … no
✔ Select navigation drawer › TouchSlideoutDrawer
✔ Select webapp header › SimpleHeader
✔ Select webapp footer › RichFooter
✔ Add 'BaseIcon' component? … yes
...

Scaffolding project in /home/ubuntu/my-vue-project... 
```
Инициализация и запуск веб приложения

```sh
$ cd my-vue-project
$ pnpm i
$ pnpm dev
```

Результат в браузере:

![](/images/vue-webapp/webapp-start.png)

## Установка из репозитория

При данном способе будет установлено всё, однако непосредственно в webapp будет подключен минимум функциональности. Удобно для ознакомления и тестирования всех доступных компонент и функционала.

```sh
$ git clone https://github.com/vuesence/vue-webapp.git
$ cd vue-webapp
$ pnpm i
$ pnpm dev
```