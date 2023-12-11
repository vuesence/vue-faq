<!-- TODO: -->

# State management in Vue 3

::: details Why State management?

Sometimes in an application you need to pass reactive data or a function from one component to another, and these components do not belong to the same hierarchy. Props/invents or provide/inject mechanisms are not suitable for this. That's why Vue 2 introduced Vuex, a state management library that allows you to store a reactive state and provide access to it from anywhere.

A frontend state management library is usually called a "store".

:::

::: details How can I pass reactive data from one component to another in Vue 3?

- If one component is a direct descendant of another - props and events
- If one component is an indirect descendant of another - provide/inject or prop/event dribbling (bad practice).
- If they are in different branches of the hierarchy - store or Vue 3 ref/reactive

Vue 3 ref/reactive is when you define and export a reactive variable in a separate js module:

```
export const userLoggedIn = ref(false);
```

It is then available throughout the application via the import of this module.

However, it is architecturally a bad idea to just share a variable. Usually there is business logic around this variable, which should be made available.

For example, authentication requires not only the fact that the user is logged in, but also the associated methods - `login()`, `logout()`, `register()`, `isAuthenticated()`. Synthesizing some kind of steit and the accompanying business logic yielded the so-called composable functions in Vue 3.

In some sense, it is an analog of an object in OOP.

:::

::: details What is a store on the frontend?

> _A Store (like Pinia) is an entity holding state and business logic that isn't bound to your Component tree. In other words, it hosts global state. It's a bit like a component that is always there and that everybody can read off and write to._
>
> _Store (such as Pinia) is an entity that contains state and business logic that is not bound to your Component tree. In other words, this is where the global state resides. It's sort of like a component that is always present, and that anyone can read and write to._
>
> \_ _Official Pinia_ documentation.

Looks like a very unfortunate, ambiguous and confusing definition.

From the perspective of a non-frontend developer (basically any language other than JavaScript, plus partially JavaScript), the analog of a construct called `store` would be a database - SQL, NoSQL or caching Redis. There are analogs of state and getters (`View` in SQL database). But in 99.99% of cases, there will be no business logic in the database except for data consistency constraints (e.g., unique or foreign keys).

From a non-frontend developer's perspective, frontend stores are just objects / stateful services built on a `singleton` pattern. Calling them _"global stores"_ is at least illogical.

It's likely that this happened historically. First there was one Vuex, it was one store and global. Then it had modules. Then Pinia modules became independent and spread all over the application. As a result, the application has a bunch of small local (by area of use) storages, each of which considers itself global, even if it is used by 2-3 components out of 1000 on the project, and even if this storage has 1% of steate and 99% of business and related logic.

In this respect, using composable functions for the same purpose (_an entity holding state and business logic that isn't bound to your Component tree_) - is much more logical. And they should be called useAuth or useAuthService instead of useAuthStore.

:::

::: details Vuex or Pinia?

In Vue 3, Pinia has become the main external library for managing the stack. Unlike Vuex, it has TypeScript support, is more convenient, and naturally takes advantage of Vue 3.

Vuex is officially deprecated

:::

::: details Pinia or Composables functions?

In Vue 3 there is something that makes a separate library for managing the state unnecessary. Namely, reactive types `Ref` and `Reactive` that can be used outside of a component. It became possible to make your own storages on the basis of composable functions and connect them in any component.

The main declared difference of Pinia is integration with Vue DevTools, plugins and SSR support. However, whether he needs one or the other, each developer decides for himself. It is quite comfortable to work with composables in DevTools.

Composable function, in its turn, can have both global and local (variables are declared inside the function) states. This can be useful in certain cases - you can create several instances of composable functions, each with its own state. For example, when you have several news widgets on your site, differing only by news category.

Also, from a functional point of view, composable functions have full access to the entire Vue Reactivity API, which makes them more flexible than Pinia.

Composable functions with global states do not work in SSR mode.

As for performance, [according to tests](https://github.com/vuesence/pinia-vs-reactive) Pinia is about 1.5 times slower on Reactive changes than Vue 3, and 20 times slower on Ref. This is because Ref (primitive types) in Pinia becomes a part of Reactive. Setup stores does not solve this problem.

You should also keep in mind that any dependency (in this case the Pinia library) can bring problems similar to the "RIP Vuex" situation when the library dies, becomes obsolete, is no longer supported, or vulnerabilities are found in it. Composable features, on the other hand, look like a thorough innovation to the Vue framework.

Here is an [interesting discussion](https://www.reddit.com/r/vuejs/comments/18fnilj/why_to_use_pinia_instead_of_global_refs/) about it on */r/vuejs*. [Code example](https://github.com/jellyfin/jellyfin-vue/blob/master/frontend/src/store/clientSettings.ts#L98) from Reddit user **@ferferga** shows how to use TypeScript classes with private modifiers, getters, setters (no *.value*) and first class type support as composable stores (which would be impossible with Pinia). Using TS classes here might not be a good practice but demonstrates flexibility and power of the Composition API.

Also here is a lifehack for Devtools from user **@coolcosmos**: *I just use refs. The cons is you lose the Devtools but in dev mode I import all my refs and pass them to pinia so I have all the pros and no cons.*


:::

::: details How to split logic between component and composable functions?

It is convenient to think of it as [MVC pattern](https://ru.wikipedia.org/wiki/Model-View-Controller), where the role of `View` (and partially `Controller`) is played by components, which are mainly responsible for visualization, and the logic and model (`Model` and partially `Controller`) fall on composable functions and their reactive state.

To understand what to put in a composable and what to put in a component (which may consist of several components), imagine that you change the component to another one - displaying your data in some other way. Ideally, the model (composite) should remain the same, you are only rewriting the component that has logic responsible for displaying it.

At the same time, the logic (`Controller`) can be shared between the component and the composable. For example, validation of form data can happen in the component (checking that the field is populated), in the component using a third-party utility (checking that the password is "complex"), and in the composable (checking that username is unique)

:::
