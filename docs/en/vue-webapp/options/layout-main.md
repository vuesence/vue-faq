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

Standard layout with header, footer and sidebar in `notebook` and `desktop` modes. In `tablet` and `mobile` modes, the sidebar moves out to the left when you click on the "hamburger" icon.

![](/images/vue-webapp/layout-main.png)

The `AppSidebar` is visible in `notebook` and `desktop` modes, and hides in `tablet` and `mobile` modes



## Routing

Changing the content of the center panel is provided via [routes](https://github.com/vuesence/vue-webapp/blob/main/src/router/routes.ts) `vue-router`
