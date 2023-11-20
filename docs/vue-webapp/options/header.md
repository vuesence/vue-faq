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

# Headers

На данный момент можно выбрать из двух видов хедера:

## SimpleHeader

![](/images/vue-webapp/header-simple.png)

Простой `sticky` header

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


<style>
    img {
        border: 1px solid #ddd;
    }
</style>