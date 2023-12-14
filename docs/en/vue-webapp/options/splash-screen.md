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

# Splash screen

A splash screen at app startup instead of a blank screen can enhance your app's user experience (UX) and strengthen your brand recognition.

![](/images/vue-webapp/splash-screen.gif)

The splash screen code is located entirely in `index.html`. It is controlled by the CSS class `splash` on the `body`.

The splash screen is removed in `App.vue / onMounted()` after all the resources needed to start the application have been loaded.

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>

