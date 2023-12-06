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

# Headers

Все хедеры адаптивны.

## SimpleHeader

![](/images/vue-webapp/header-simple.png)

Простой `sticky` header

## MantineSimpleHeader

![](/images/vue-webapp/header-simple-mantine.png)

Простой `sticky` header в стиле Mantine UI

## MantineLayeredHeader

![](/images/vue-webapp/header-layered-mantine.png)

`sticky` header с уровнями в стиле Mantine UI

## SlidingHeader

![](/images/vue-webapp/header-sliding.gif)

Может содержать два разных header-а, второй появляется после того, как пользователь проскроллит страницу вниз

```html
<AppHeader :threshold-hide="200" :threshold-open="400">
    <template #first-header>
        <AppHeaderFirst />
    </template>

    <template #second-header>
        <AppHeaderSecond />
    </template>
</AppHeader>
```


<style scoped>
img {
    border: 1px solid #ddd;
}
</style>