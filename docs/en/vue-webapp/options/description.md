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

# Implementation details

## Code injections in the index.html

To avoid bloating `index.html` injections of code fragments into it (Open graph, Google analytics, Splash screen, Service worker etc.) are done via [vite-plugin-html-injection](https://github.com/altrusl/vite-plugin-html-injection/) Vite plugin.

The code snippets themselves are located in the `./src/utils/injections/` directory. The plugin configuration file `injection-config.ts` is also located there.

## CSS tricks

A hack is applied in the application on large screen resolutions to prevent screen jumping when the main scrollbar appears/disappears

```css
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%))
}
```