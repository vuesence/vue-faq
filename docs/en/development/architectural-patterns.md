# Architectural patterns

::: details Suitable architecture for Vue 3 web application

The most suitable architecture for a Vue 3 application is modular.

Initially, the application is divided into logical modules that are loosely related to each other. For example, for an online store, it can be a product catalog module, a module of a single product, a user account module etc.

In addition, there is a shell module - what is sometimes referred to as `app shell`. A template with a header, footer, side menu and main window. It is wise to put utilities and resources used throughout the application into this module - for example, `api`, `useI18n`, `BaseButton`and`stringHelpers`.

Each module has its own `components`, `composables`, `assets`, `utils`; probably `api`, `routes`, `views`, `layouts`.

Loose coupling allows each module to be developed fairly independently, which greatly increases the likelihood of project success.

:::

::: details How to reuse the same developed resources on several projects?

Sometimes there are two or more projects (admin panel and website, for example) that need to use the same components, utilities, services, composite functions and other resources that are in the process of development.

The most convenient in this case is to separate such resources into a separate project/repository, and use Git submodules to connect it as a subdirectory in each project. VS Code allows you to work transparently and comfortably with both the project and connected submodules at the same time.

If you need versioning and independence of the resource library, you can make it as a private NPM package.

:::

::: details Use cases for using Provide/Inject

#### Use cases

- Theme or Configuration Settings: You can provide global settings, themes, or configuration options at the root level of your Vue.js application and inject them into any component that needs them.
- Authentication Data: Share user authentication information, such as user details or authentication tokens, with components that require them without passing them down through props.
- Internationalization (i18n): Store translation data at the root level and inject it into components that need to display text in different languages.
- Tightly coupled components: Like i.e. `AccordianPanel` that only ever appears inside of an `Accordian` component slot. You can inject shared data that you always want to have access to it without the need to pass it in as a prop.

#### Best Practices and Considerations

- Avoid Overuse: While provide and inject can be powerful, don't overuse them. Reserve them for cases where you genuinely need to share data across components without creating tight coupling between them.
- Clear Documentation: Document the data you are providing and injecting to make it easy for developers to understand how components communicate. You can also type them with TypeScript see the [official documentation](https://vuejs.org/guide/typescript/composition-api.html#typing-provide-inject) for details.
- Consider Prop Drilling: Prop drilling is usually an anti-pattern, but in some cases, passing data through props might still be a more straightforward and more transparent approach. Evaluate whether provide and inject are the best solution for your specific scenario.

:::

::: details What is the best way to organise work with app layouts?

An application can have several layouts - one with a side menu, for example, and one without. Some pages are shown with side menu, others - without.

It is convenient to regulate this by routes. Just create two nested `router-views` - the outer one is responsible for the app layout, and the inner one (there can be several) is responsible for the components in that layout.

An example:

```vue
// MainLayout
<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

// SidebarLayout
<template>
  <div>
    <AppHeader />
    <div>
        <AppSidebar />
        <router-view />
    </div>
    <AppFooter />
  </div>
</template>

// App.vue
<template>
  <router-view />
</template>
```

`routes = generalRoutes U accountRoutes`

```js
export const generalRoutes = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "/maintenance",
      name: "maintenance",
      component: MaintenanceView,
    },
  ]
};
// ...

export const accountRoutes = {
  path: "/account",
  component: SidebarLayout,
  children: [
    {
      path: "",
      name: "account",
      component: UserAccountView,
      meta: { requiresAuth: true, backRoute: "/" },
    }
  ]
};
```

:::

::: details How to make one global preloader (alternative of Suspense)?

If several asynchronous functions can be executed simultaneously in the application (loading data from the backend, for example), and the animation preloader should be only one, it is easy to implement it via a composable function:

##### AppLoader.vue
```vue
<script setup>
import { useAppLoader } from "@/app/composables/useAppLoader";
const { loading } = useAppLoader();
</script>

<template>
  <div class="loader" :class="{ active: loading }">
    <div class="loaderBar" />
  </div>
</template>
```

##### useAppLoader.ts
```ts
import { computed, reactive, ref } from "vue";
import { uuid } from "@/app/utils/uuid";

const loaderSet = reactive(new Set<string>());
const loading = computed(() => loaderSet.size > 0);

export function useAppLoader() {
  const _uuid: string = uuid();

  function startLoading() {
    loaderSet.add(_uuid);
  }
  function stopLoading() {
    loaderSet.delete(_uuid);
  }

  return { loading, startLoading, stopLoading };
}
```

##### Some component

```js
import { useAppLoader } from "@/app/composables/useAppLoader";
const { startLoading, stopLoading } = useAppLoader();

startLoading();
product.value = await api.products.product(props.productId);
stopLoading();
```

`uuid` - any function to generate a unique id.
:::
