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

# Objectives 

1. Create a simple working SPA front-end application for a specific task in a few minutes, style it and fill it with content in a few hours.
<<<<<<< HEAD
2. Customize it with small functional code blocks.
=======
2. Fine-tune it with small functional code blocks.
>>>>>>> b167565 (chore: add analogy with a driver)
3. Collect and summarize the best techniques and practices for building a modern reactive frontend.
4. Enable novice developers to learn frontend and Vue 3 best practices from building application architecture to naming CSS classes with ready-made examples.
5. Enable experienced developers to quickly and more efficiently reuse overused boilerplate code, especially that which cannot be distributed as NPM packages.
6. This application should act as a website builder, with the ability to choose when creating:
    - A global business website template (portfolio, blog, online store, etc.)
    - A variant of the general layout of the web application
    - Variants of specific components (header, footer, sidebar, etc.)
    - General style/design options
    - Separate functionality injected as functional fragments (API module, i18n, PWA, splash screen, auth module, themes, etc.)
    - Ability to connect/integrate common libraries (including UI) if desired
    - Possibility to integrate with certain headless CRM and other backend API services.

------

::: tip note
Connecting certain functionality, e.g. i18n, means not just adding this library to `package.json`, but a full-fledged minimal working integration - creating a corresponding composable function, multiple locales, and applying t() in a template for illustration with necessary comments in the code to facilitate further use and customization.
:::