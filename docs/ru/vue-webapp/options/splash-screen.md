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

# Splash screen

Заставка при старте приложения вместо пустого экрана может повысить восприятие вашего приложения пользователями (UX) и укрепить узнаваемость вашего бренда.

![](/images/vue-webapp/splash-screen.gif)

Код заставки находится полностью в `index.html`. Контролируется CSS классом `splash` на `body`.

Убирается заставка в `App.vue / onMounted()` после загрузки всей необходимых для начала работы приложения ресурсов. 

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>

