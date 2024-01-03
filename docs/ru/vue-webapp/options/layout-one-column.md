---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp builder
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# OneColumnLayout

Аналогичен `MainLayout`, но без сайдбара в `notebook` и `desktop` режимах. Может применяться, например, если вся навигация помещается в хедер. В `tablet` и `mobile` режимах сайдбар также выезжает при нажатии на "гамбургер" иконку.

![](/images/vue-webapp/layout-one-column.png)

В обоих случаях максимальная ширина лэйаута устанавливается CSS переменной `--vwa-layout-max-width`.
