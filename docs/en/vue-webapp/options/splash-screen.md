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

# Splash screen

A splash screen during application startup instead of a blank screen can enhance application user experience and strengthen brand recognition.

![image](/images/vue-webapp/splash-screen.gif)

The splash screen code is located entirely in the `index.html`. It is controlled by the CSS class `splash` on the `body` tag.

The splash screen is removed in `App.vue / onMounted()` after all the resources needed to ignite the application have been loaded.

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
