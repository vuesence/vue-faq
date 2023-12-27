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

All headers are adaptive.

## SimpleHeader

![](/images/vue-webapp/header-simple.png)

Simple `sticky` header

## MantineSimpleHeader

![](/images/vue-webapp/header-simple-mantine.png)

Simple `sticky` header in Mantine UI style

## MantineLayeredHeader

![](/images/vue-webapp/header-layered-mantine.png)

Layered `sticky` header in Mantine UI style

## SlidingHeader

![](/images/vue-webapp/header-sliding.gif)

Can contain two different headers, the second one appears after the user scrolls down the page

```vue-html
<AppHeader :threshold-hide="200" :threshold-open="400">
    <template #first-header>
        <AppHeaderFirst />
    </template>

    <template #second-header>
        <AppHeaderSecond />
    </template>
<AppHeader>
```


<style scoped>
img {
    border: 1px solid #ddd;
}
</style>