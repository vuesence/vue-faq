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

# Guidelines 

- Lightweight, efficient web application with modern UI/UX
- Vue 3, Composition API, script setup syntax
- Do not use third party libraries unnecessarily. The only necessary dependency is `vue-router`.
- Use clean and efficient HTML5 and CSS3 for layout
- Include specific functionality only when needed
- High degree of customization 


------

- Plugging in specific functionality, such as `i18n`, means not just adding that library to `package.json`, but a full-fledged minimal working integration - creating a corresponding composable function, multiple locales, and applying `t()` in a template for illustration with necessary comments in the code to facilitate later use and customization.

- Integrating certain functionality that uses a third-party library (e.g. toaster or modal window) should be done through a wrapper, so that it would be easy for the developer to change the specific package that implements the functionality if desired.

- The scaffolded web application uses **TypeScript**, but it is possible to continue developing the application in pure JavaScript.

- Vite is used as the builder.

- SCSS is used as the CSS preprocessor.

- Antony Fu's [eslint-config](https://github.com/antfu/eslint-config) is used for linting and formatting in ESlint.

- The result should be a Vue 3 application without not-needed dependencies, unless the user explicitly includes them in the framework.