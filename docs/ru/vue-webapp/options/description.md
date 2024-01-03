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

# Детали реализации

## Инъекции кода в index.html

Чтобы не раздувать `index.html` инъекции фрагментов кода в него (Open graph, Google analytics, Splash screen, Service worker) делаются через [vite-plugin-html-injection](https://github.com/altrusl/vite-plugin-html-injection/) Vite плагин.

Сами фрагменты кода расположены в `./src/utils/injections/` директории. Там же находится конфигурационный файл плагина `injection-config.ts`.

## CSS tricks

В приложении на больших разрешениях применен хак для недопущения прыгания экрана при появлении/исчезновении главного скролбара

```css
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
```