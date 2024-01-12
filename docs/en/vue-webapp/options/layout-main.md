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

# MainLayout

Standard layout with header, footer and sidebar in `notebook` and `desktop` modes. In `tablet` and `mobile` modes the sidebar is hidden and moves in from the left when user clicks on the "hamburger" icon.

![image](/images/vue-webapp/layout-main.png)

## Routing

Changing the content of the main panel is provided via `vue-router` [routes](https://github.com/vuesence/vue-webapp/blob/main/src/router/routes.ts).
