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

Similar to `MainLayout`, but without the sidebar in `notebook` and `desktop` modes. Can be used, for example, if all navigation is located in the header. In `tablet` and `mobile` modes, the sidebar also pops out when the "hamburger" icon is clicked.

![image](/images/vue-webapp/layout-one-column.png)

In all layout cases, the maximum width of the layout is set by the CSS variable `--vwa-layout-max-width`.
