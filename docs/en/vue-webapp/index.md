---
head:
  - - meta
    - name: og:site_name
      content: vue-webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# Scaffolding a Vue webapp

## Summary

Vue 3 website builder/scaffolder ([GitHub](https://github.com/vuesence/vue-webapp)) for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.

```sh
$ pnpm create vue-webapp

√ Project name: ... my-vue-project
√ Add a Splash screen? ... no / yes
√ Make it PWA (adds service worker and manifest)? ... no / yes
√ Add Open Graph meta tags? ... no / yes
√ Add Google Analytics code? ... no / yes
...
```

## Justification

There are quite a few (mostly specific and quickly becoming obsolete) boilerplate templates for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it's just setting up an environment to start development without, actually, code.

At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.

As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some "metaframwork" or other solution - like Nuxt, Astro, VitePress, Vue Storefront - which explicitly position themselves as tools for solving certain (or a wide range of) business tasks.

There is a need for a tool similar to `create-vue`, for scaffolding a ready-to-go web application. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies and libraries on an experienced developer and create a skeleton of established best practices for further development of the application.

It is clear that defining one or another "best practice" (fetch or axios?) can be quite controversial, but nevertheless.

![image](/images/vue-webapp/use-case.png)

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
