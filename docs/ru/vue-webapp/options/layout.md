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

# Макет приложения

## MainLayout

На данный момент поддерживается один макет

![](/images/vue-webapp/layout-main.png)

AppSidebar виден в режимах `notebook` и `desktop`, и скрывается в `tablet` и `mobile`

## Routing

Смена содержимого центральной панели обеспечивается через [маршруты](https://github.com/vuesence/vue-webapp/blob/main/src/router/routes.ts) `vue-router`


## Адаптивность

Адаптивность реализована с помощью [useScreenWidth](https://github.com/vuesence/vue-webapp/blob/main/src/composables/useScreenWidth.ts) composable функции через четыре класса (`mobile`, `tablet`, `notebook` и `desktop`), динамично устанавливающихся на тэг `body`.

Конфигурационные параметры (верхний брейкпойнт для каждого режима) для `useScreenWidth` устанавливаются в `App.vue`:

```vue
<script setup lang="ts">
import { useScreenWidth } from "@/composables/useScreenWidth";

useScreenWidth({
  mobile: 480,
  tablet: 767,
  notebook: 1199,
  desktop: 10000,
});
</script>
```

В дальнейшем адаптивность можно использовать как в JavaScript коде:

```js
// can be 'mobile', 'tablet' 'notebook' or 'desktop'
const { screenWidthFactor } = new useScreenWidth();
```

так и в SCSS:

```scss 
.container {
    display: flex;
    flex-direction: row;
    .mobile &, .tablet & {
        flex-direction: column;
    }
    .box {
        border: 1px solid gray;
    }
}
```

```html 
<div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```