---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.jpg
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.jpg
---

# Navigation drawers

На данный момент можно выбрать из двух видов навигационных шторок.

## SimpleDrawer

![](/images/vue-webapp/drawer-simple.png)

Всегда открыт для разрешений экрана `notebook` и `desktop`, а для мобильных устройств и планшетов открывается по клику/нажатию на иконку "гамбургера".

## TouchSlideoutDrawer

![](/images/vue-webapp/drawer-touch.gif)

Аналогичен SimpleDrawer, но управляется с помощью прикосновений на сенсорных экранах. Добавляет приятный UX.

Функциональность реализована с помощью [useTouchSwipe](https://github.com/vuesence/vue-webapp/blob/main/src/composables/useTouchSwipe.ts) composable функции и [TouchSlideoutDrawer](https://github.com/vuesence/vue-webapp/blob/main/src/components/drawers/TouchSlideoutDrawer.vue) компонента.


<style>
    img {
        border: 1px solid #ddd;
    }
</style>