---
head:
  - - meta
    - name: og:site_name
      content: vue-webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp.jpg
  - - meta
    - name: twitter:image
      content: /images/vue-webapp.jpg
---

# Scaffolding vue webapp

## Summary

Vue 3 website scaffolder for developers, with a choice of business template (portfolio, blog, store, etc.), layout template, design and functionality (API module, i18n, PWA, splash screen, auth module, themes, etc.), for further convenient customization and content filling.

```sh
$ pnpm create vue-webapp

✔ Project name: … my-vue-project
✔ Make it PWA ( adds service worker and manifest )? … yes
✔ Add Github Action Workflow for publishing it on GitHub Pages? … no
✔ Select navigation drawer › TouchSlideoutDrawer
✔ Select webapp footer › RichFooter
✔ Add 'BaseIcon' component? … yes
...
```

### Description

There are quite a few (mostly specific and quickly becoming obsolete) boilerplate code examples for creating a Vue application. Usually it means creating an empty project with certain libraries. In other words, it's just setting up an environment to start development without, actually, code.

At the same time, many other frontend and backend frameworks have starter-kits that allow you to quickly create a ready-made blog, online store, business card site, portfolio, documentation, etc., which greatly helps in learning the framework itself, relevant technologies and best practices, as well as for solving business tasks.

As a result, it may seem that Vue is a rather low-level framework, and to create web applications quickly, efficiently and conveniently, you need to take some "metaframwork" or other solution - like Nuxt, Vue Storefront, Astro, VitePress - which explicitly position themselves as a tool for solving certain (or a wide range of) business tasks.

The idea for a tool similar to `create-vue', creating a framework for a ready-to-go web application, has emerged. On the one hand, a quite workable, adaptive website with the necessary functionality so that a novice developer could familiarize himself with a proven approach to solving the tasks involved. On the other hand, it should be minimalistic enough not to impose unwanted technologies on an experienced developer and create a skeleton of established best practices for further development of the application.

It is clear that defining one or another "best practice" (fetch or axios?) can be quite controversial, but nevertheless.
