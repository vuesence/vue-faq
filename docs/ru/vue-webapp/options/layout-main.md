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

# MainLayout

Стандартный макет с хедером, футером и сайдбаром в `notebook` и `desktop` режимах. В `tablet` и `mobile` режимах сайдбар выезжает слева при нажатии на "гамбургер" иконку.

![](/images/vue-webapp/layout-main.png)

`AppSidebar` виден в режимах `notebook` и `desktop`, и скрывается в `tablet` и `mobile`



## Routing

Смена содержимого центральной панели обеспечивается через [маршруты](https://github.com/vuesence/vue-webapp/blob/main/src/router/routes.ts) `vue-router`
