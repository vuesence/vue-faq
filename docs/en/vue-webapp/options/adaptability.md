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

# Adaptability

Adaptability is implemented with [useScreenWidth](https://github.com/vuesence/vue-webapp/blob/main/src/composables/useScreenWidth.ts) composable function via four CSS classes (`mobile`, `tablet`, `notebook` and `desktop`) dynamically set on the `body` element.

The configuration parameters (upper breakpoint for each mode) for `useScreenWidth` are set in `App.vue`:

```vue
<script setup lang="ts">
import { useScreenWidth } from "@/composables/useScreenWidth";

useScreenWidth({
  mobile: 480,
  tablet: 767,
  notebook: 1199,
  desktop: 10000,
});
</script>
```

That composable function can be used in JavaScript code:

```js
// can be 'mobile', 'tablet' 'notebook' or 'desktop'
const { screenWidthFactor } = new useScreenWidth();
```

and CSS classes in SCSS:

```scss
.container {
    display: flex;
    flex-direction: row;
    .mobile &, .tablet & {
        flex-direction: column;
    }
    .box {
        border: 1px solid gray;
    }
}
```

```html
<div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>
```