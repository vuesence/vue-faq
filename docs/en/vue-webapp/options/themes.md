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

# Themes

The application implements light and dark themes. All components support switching themes.

Themes are controlled via CSS variables, which are defined in the [vars.css](https://github.com/vuesence/vue-webapp/blob/main/src/assets/styles/vars.css) file. The theme selected by the user is stored in `localStorage`. The [ThemeToggle](https://github.com/vuesence/vue-webapp/blob/main/src/components/ui/ThemeToggle.vue) component is responsible for theme switching.

It is possible to customize themes and create new ones by overriding CSS variables, which is recommended to do in the [custom.scss](https://github.com/vuesence/vue-webapp/blob/main/src/assets/styles/custom.scss) file:

```css
:root {
  --vwa-font-family-base: 'Roboto', sans-serif;
  --vwa-layout-max-width: 1280px;

  --vwa-c-border: #c2c2c4;
  --vwa-c-divider: #e2e2e3;
  --vwa-c-gutter: #e2e2e3;

  --vwa-c-text-1: rgba(60, 60, 67);
  --vwa-c-text-2: rgba(60, 60, 67, 0.78);
  --vwa-c-text-3: rgba(60, 60, 67, 0.56);
}
.dark {
  --vwa-c-text-1: rgba(255, 255, 245, 0.86);
  --vwa-c-text-2: rgba(235, 235, 245, 0.6);
  --vwa-c-text-3: rgba(235, 235, 245, 0.38);
}

/* ... etc */

```