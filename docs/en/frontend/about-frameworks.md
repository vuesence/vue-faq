# About frontend frameworks

::: details What is "reactivity"?

Probably the most fundamental difference between a frontend program and a backend program, a microservice or even a standalone GUI application is the concept of "**reactivity**".

When working on a back end, the programmer is in a good position to control the flow of data. He controls where to get it from, where to send it to, who can change it, all this in a single thread or in a multithreaded system.

On the front, the UI interactivity factor plays a big role - data should be dynamically shown to the user, the user can change the data, data can be changed by different counterparties (user, backend, internal calculations). In principle, it is possible to use the usual programmer approaches as on the backend - i.e., self-monitor the data changes in each place, and perform updates of all dependencies. This will give a lot of boilerplate - routine repetitive code. Reactive frameworks have made programmers' lives a lot easier by taking care of this updating of a variable's dependencies when it changes.

In a reactive framework, all you need to do is define a reactive variable and specify that it is, for example, the value of an input field. When the user enters a value into this field, the variable will be automatically updated, and all other variables that depend on it will be updated as well. You don't need to write any code for this.

Simplistically speaking, under the hood, a reactive variable is a proxy wrapper over an ordinary variable, which keeps track of its changes and registers all the listeners who need to be notified of the variable's change so that they can recalculate themselves.

:::

::: details What reactive frontend frameworks exist

React, Vue, Angular are the most common. There are many others that have not taken off.

Angular is usually used for large projects (large teams of different levels of programmers) and tightly clamps development into its rules.

React and Vue are more flexible and similar, but there are significant differences.

Vue is faster, smaller, more efficient, doesn't mix HTML and JS, has a lower threshold of entry. Actively evolving.

Behind React- Zuckerberg and a greater&#x301;l prevalence. More job offers, but also more applicants per job.

:::

::: details Why Vue?

To be able to develop and manage large complex software systems, OOP - object-oriented programming - was invented, where new entities - objects - were introduced to hierarchize complexity. They encapsulated data and behavior (logic).

On the frontend, the situation is a bit different due to the presence of code in several programming languages - HTML, CSS, JavaScript. And in this case, the SFC components in Vue serve perfectly to break down the complexity of the system. Each component encapsulates the HTML template, its styling and logic.

Vue does this much better than the same React, which lumps everything together. In this aspect, Vue is unequivocally the flagship of component-oriented programming (COP) on the frontend.

In addition, Vue 3 introduced reactivity beyond components - `ref` and `reactive` variables can be set in a simple `js` module. This is used in `composable` functions. It has become possible to separate not only the reactive service (`useI18n`, `useScreenSize` for example) but also the business logic (`useShoppingCart`, `useNewsWidget`) from the view. This allows to use [MVC pattern](https://ru.wikipedia.org/wiki/Model-View-Controller) on the frontend, where the roles of `View` and partially `Controller` are performed by components responsible mainly for visualization, and the logic and model (`Model` and partially `Controller`) fall on composable functions and their reactive state.

This makes it possible to make, for example, changing the site design or replacing the UI library a much easier task.

This feature also makes Vue stand out from other reactive frameworks.

The Reactivity API in Vue 3 may not be perfect yet (which is why creator of the Vue.js Evan You has been experimenting with Reactivity Transform), but it's already quite suitable for developing large, robust, scalable systems, which was not the case with Vue 2.

::: tip
Vue's reactivity can be used without UIs at all. For example, [this VS Code extension](https://github.com/soerenuhrbach/vscode-deepl/blob/main/src/state.ts) uses the Vue 3 elements `reactive`, `ref`, and `watch` to organize reactivity in code without visual components.

:::
