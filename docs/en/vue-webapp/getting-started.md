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
# Getting started

## Installation via `create vue-webapp`

```sh
ubuntu@localhost:~$ pnpm create vue-webapp

✔ Project name: … my-vue-project
✔ Make it PWA ( adds service worker and manifest )? … yes
✔ Add Github Action Workflow for publishing it on GitHub Pages? … no
✔ Select navigation drawer › TouchSlideoutDrawer
✔ Select webapp footer › RichFooter
✔ Add 'BaseIcon' component? … yes

Scaffolding project in /home/ubuntu/my-vue-project... 
Done.
```

### Initializing and launching a web application

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
This method will only install the selected components

## Installation from the repository

```sh
$ git clone https://github.com/vuesence/vue-webapp.git
$ cd vue-webapp
$ pnpm i
$ pnpm dev
```

With this method everything will be installed, but a minimum of functionality will be enabled. It is usefull for testing all available components and functionality.