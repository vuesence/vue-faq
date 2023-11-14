---
head:
  - - meta
    - name: og:site_name
      content: vue-webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp.jpg
  - - meta
    - name: twitter:image
      content: /images/vue-webapp.jpg
---
# Установка

## Установка через `create vue-webapp`

```sh
<<<<<<< HEAD
$ pnpm create vue-webapp
=======
ubuntu@localhost:~$ pnpm create vue-webapp
>>>>>>> 20c2df5 (chore: add 'getting started')

✔ Project name: … my-vue-project
✔ Make it PWA ( adds service worker and manifest )? … yes
✔ Add Github Action Workflow for publishing it on GitHub Pages? … no
✔ Select navigation drawer › TouchSlideoutDrawer
✔ Select webapp footer › RichFooter
✔ Add 'BaseIcon' component? … yes

<<<<<<< HEAD
<<<<<<< HEAD
Scaffolding project in /home/ubuntu/my-vue-project... 
Done.
=======
Scaffolding project in /home/ubuntu/my-vue-project... done.
>>>>>>> 20c2df5 (chore: add 'getting started')
=======
Scaffolding project in /home/ubuntu/my-vue-project... 
Done.
>>>>>>> b167565 (chore: add analogy with a driver)
```
Инициализация и запуск веб приложения

```sh
$ cd my-vue-project
$ pnpm i
$ pnpm dev

> my-vue-project@1.0.0 dev \home\ubuntu\my-vue-project
> vite

  VITE v4.5.0  ready in 1067 ms

  ➜  Local:   http://localhost:5173/vue-webapp/
  ➜  Network: use --host to expose
  ➜  press h to show help

```
При данном способе будут установленны только выбранные компоненты

## Установка из репозитория

```sh
$ git clone https://github.com/vuesence/vue-webapp.git
$ cd vue-webapp
$ pnpm i
$ pnpm dev
```

При данном способе будет установлено всё, однако непосредственно в webapp будет подключен минимум функциональности. Удобно для тестирования всех доступных компонент и функционала.