# CSS and UI libraries

::: details What are CSS and UI libraries?

CSS and UI libraries either provide their own or help you create custom UI components like Button or Select? which can speed up your development.

CSS libraries do not contain JavaScript code and therefore have limitations for complex components like Select or Dropdown.

There is a separate type of Headless-UI libraries that offer components without stylized visualization - only component logic and Accessibility requirements. The developer needs to add CSS styles himself.

:::

::: details Pros and cons of UI libraries?

Pros: shortens the development, if you use it on the project as much as possible, brings a unified style to the application

Cons: as any dependency can become obsolete (Vuetify 2 tragedy), adds weight to the final bundle.

:::

::: details How to reduce dependency on foreign libraries?

Wrap up UI library components in your own custom components.

```vue
<!-- BaseButton.vue -->
<template>
  <QButton ... />
</template>
```

and use `BaseButton` in your code. This way it will be much easier for you to upgrade, replace the library or replace this component with a self-designed one. And even just change the styles of the component.

:::

::: details Layout and adaptability of pages by means of CSS and UI libraries

Using the column system and other functionality of CSS and UI libraries like the popular Tailwind is convenient for small projects and sometimes speeds up layout, but very much worsens the quality of the code as a whole, including its maintainability and extensibility. It's as if the world went back to the days of IE6, when all styles and JavaScript were also located in tag attributes, and the whole evolution of CSS into a clear, convenient, beautiful hierarchical class model was for nothing, just like the division of the web into document (template), presentation layer (CSS styles) and logic (JavaScript).

The web is full of articles why an approach like Tailwind is a bad thing. We can only note that with proper skill, layout on pure CSS3 is also fast and much more convenient and pleasant in terms of DX than through CSS and UI libraries.

::: tip Quote

Good developers know the reasons why standards, patterns and good practices have become the way they are.

Bad developers stick to whatever new trend that might save them some learning curve.

:::
