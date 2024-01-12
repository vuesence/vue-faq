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

# Navigation drawers

There are currently two types of navigation drawers to choose from.

## SimpleDrawer

![image](/images/vue-webapp/drawer-simple.png)

It is always on for `notebook` and `desktop` screen resolutions, and can be opened for `mobile` and `tablet` by clicking/tapping on the "hamburger" icon.

## TouchSlideoutDrawer

![image](/images/vue-webapp/drawer-touch.gif)

Similar to SimpleDrawer, but is controlled by touch on touch screens. Adds a nice UX.

Functionality is implemented with [useTouchSwipe](https://github.com/vuesence/vue-webapp/blob/main/src/composables/useTouchSwipe.ts) composable function and [TouchSlideoutDrawer](https://github.com/vuesence/vue-webapp/blob/main/src/components/drawers/TouchSlideoutDrawer.vue) component.

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
