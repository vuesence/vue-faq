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

# Темы 

В приложении реализовано переключение светлой и тёмной тем. Все компоненты поддерживают переключение тем.

Темы управляются через CSS переменные, которые определены в файле [vars.css](https://github.com/vuesence/vue-webapp/blob/main/src/assets/styles/vars.css). Выбранная пользователем тема запоминается в localStorage. За переключение тем отвечает компонент [ThemeToggle](https://github.com/vuesence/vue-webapp/blob/main/src/components/ui/ThemeToggle.vue)

Возможна кастомизация темы и создание новых через переопределение CSS переменных, что рекомендуется делать в файле [custom.scss](https://github.com/vuesence/vue-webapp/blob/main/src/assets/styles/custom.scss):

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

/*  ... etc  */ 

```