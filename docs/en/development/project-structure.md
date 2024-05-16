# Vue 3 project structure

## Possible file structures for Vue 3 projects

::: details Flat Approach

When launching a small-scale Vue project such as a Proof of Concept, you might prefer a straightforward folder structure to avoid complexity:
/src

```txt
/src
|-- /components
|   |-- BaseButton.vue
|   |-- BaseCard.vue
|   |-- PokemonList.vue
|   |-- PokemonCard.vue
|-- /composables
|   |-- usePokemon.js
|-- /utils
|   |-- validators.js
|-- /layout
|   |-- DefaultLayout.vue
|   |-- AdminLayout.vue
|-- /plugins
|   |-- translate.js
|-- /views
|   |-- Home.vue
|   |-- PokemonDetail.vue
|-- /router
|   |-- index.js
|-- /store
|   |-- index.js
|-- /assets
|   |-- /images
|   |-- /styles
|-- /tests
|   |-- ...
|-- App.vue
|-- main.js
```

:::

::: details Atomic Design

For larger Vue applications, employing the Atomic Design methodology can be advantageous. This approach organizes components into a hierarchy from simplest to most complex:

- Atoms: Basic elements (e.g., buttons, icons)
- Molecules: Groups of atoms (e.g., search bars)
- Organisms: Complex components (e.g., navigation bars)
- Templates: Layouts displaying component structure
- Pages: Actual UI screens with real data

This method ensures scalability and maintainability, facilitating the transition between simple and complex components smoothly.

![image](/images/faq/atomic-design.jpg)

```txt
/src
|-- /components
|   |-- /atoms
|   |   |-- AtomButton.vue
|   |   |-- AtomIcon.vue
|   |-- /molecules
|   |   |-- MoleculeSearchInput.vue
|   |   |-- MoleculePokemonThumbnail.vue
|   |-- /organisms
|   |   |-- OrganismPokemonCard.vue
|   |   |-- OrganismHeader.vue
|   |-- /templates
|   |   |-- TemplatePokemonList.vue
|   |   |-- TemplatePokemonDetail.vue
|-- /pages
|   |-- PageHome.vue
|   |-- PagePokemonDetail.vue
|-- /composables
|   |-- usePokemon.js
|-- /utils
|   |-- validators.js
|-- /layout
|   |-- LayoutDefault.vue
|   |-- LayoutAdmin.vue
|-- /plugins
|   |-- translate.js
|-- /router
|   |-- index.js
|-- /store
|   |-- index.js
|-- /assets
|   |-- /images
|   |-- /styles
|-- /tests
|   |-- ...
|-- App.vue
|-- main.js

```

:::

::: details Modules

As your project scales, consider a modular monolithic architecture. This structure encapsulates each feature or domain, enhancing maintainability and preparing for potential evolution towards microservices:

```txt
/src
|-- /core
|   |-- /components
|   |   |-- BaseButton.vue
|   |   |-- BaseIcon.vue
|   |-- /models
|   |-- /store
|   |-- /services
|   |-- /views
|   |   |-- DefaultLayout.vue
|   |   |-- AdminLayout.vue
|   |-- /utils
|   |   |-- validators.js
|-- /modules
|   |-- /pokemon
|   |   |-- /components
|   |   |   |-- PokemonThumbnail.vue
|   |   |   |-- PokemonCard.vue
|   |   |   |-- PokemonListTemplate.vue
|   |   |   |-- PokemonDetailTemplate.vue
|   |   |-- /models
|   |   |-- /store
|   |   |   |-- pokemonStore.js
|   |   |-- /services
|   |   |-- /views
|   |   |   |-- PokemonDetailPage.vue
|   |   |-- /tests
|   |   |   |-- pokemonTests.spec.js
|   |-- /search
|   |   |-- /components
|   |   |   |-- SearchInput.vue
|   |   |-- /models
|   |   |-- /store
|   |   |   |-- searchStore.js
|   |   |-- /services
|   |   |-- /views
|   |   |-- /tests
|   |   |   |-- searchTests.spec.js
|-- /assets
|   |-- /images
|   |-- /styles
|-- /scss
|-- App.vue
|-- main.ts
|-- router.ts
|-- store.ts
|-- /tests
|   |-- ...
|-- /plugins
|   |-- translate.js
```

:::

::: details Feature Sliced Design

Feature-Sliced Design is a way to organize big and long-term projects so they are easier to manage and grow. This approach breaks the application into different layers, each with a specific role:

- App: Global settings, styles, and providers.
- Pages: Builds full pages using entities, features, and widgets.
- Widgets: Combines entities and features into cohesive UI blocks, like IssueList or UserProfile.
- Features: Handles user interactions that add value, such as sending comments, adding to cart, or searching users.
- Entities: Represents core business models like User, Product, and Order.
- Shared: Provides reusable utilities and components unrelated to specific business logic, like UIKit, libraries, and APIs.

![image](/images/faq/fsd.jpg)

```txt
/src
|-- /app
|   |-- App.vue
|   |-- main.js
|   |-- app.scss
|-- /processes
|-- /pages
|   |-- Home.vue
|   |-- PokemonDetailPage.vue
|-- /widgets
|   |-- UserProfile.vue
|   |-- PokemonStatsWidget.vue
|-- /features
|   |-- pokemon
|   |   |-- CatchPokemon.vue
|   |   |-- PokemonList.vue
|   |-- user
|   |   |-- Login.vue
|   |   |-- Register.vue
|-- /entities
|   |-- user
|   |   |-- userService.js
|   |   |-- userModel.js
|   |-- pokemon
|   |   |-- pokemonService.js
|   |   |-- pokemonModel.js
|-- /shared
|   |-- ui
|   |   |-- BaseButton.vue
|   |   |-- BaseInput.vue
|   |   |-- Loader.vue
|   |-- lib
|   |   |-- api.js
|   |   |-- helpers.js
|-- /assets
|   |-- /images
|   |-- /styles
|-- /router
|   |-- index.js
|-- /store
|   |-- index.js
|-- /tests
|   |-- featureTests.spec.js
```

:::

::: details Microfrontends

Microfrontends take the idea of Microservices and apply it to the front-end part of web apps. This means different teams can work on different sections of a web app without interfering with each other. Each section, or "Microfrontend," works on its own and can change independently. Here's a basic overview for an SPA. Please note that I won't delve into the details of how Microfrontends actually work in this blog post.

- Application Shell: This is the main controller that handles the basic layout and routing for the site. It connects all the Microfrontends together.
- Decomposed UIs: Each Microfrontend focuses on a specific part of the application. They can be developed with different technologies and updated separately.

![image](/images/faq/microfronends.jpg)

The main advantage is that Microfrontends let teams update parts of the app without waiting for others, which can speed up development. However, this setup can make the app more complex to manage and keep consistent.

Useful Resources:
- [Micro Frontends - Extending Microservice Ideas to Frontend Development](https://micro-frontends.org/)
- [Martin Fowler on Microfrontends](https://martinfowler.com/articles/micro-frontends.html)

This strategy is ideal for large, complex projects with multiple development teams. Each team can focus on specific business requirements without affecting the work of others, potentially using the technology that best suits their part of the application.

:::

::: details Comparison table

| Approach | Description | Pros | Cons |
| --- | --- | --- | --- |
| **Flat Approach** | Simple structure, ideal for small projects or proof of concept. | \- Easy to implement  <br>\- Minimal setup | \- Not scalable  <br>\- Clutters as project grows |
| **Atomic Design** | Hierarchical structure based on component complexity. | \- Scalable  <br>\- Organized  <br>\- Reusable components | \- Overhead in managing layers  <br>\- Complex setup |
| **Modules** | Modular structure that encapsulates features. | \- Scalable  <br>\- Encapsulated features | \- Potential duplication  <br>\- Can become complex |
| **Feature-Sliced Design** | Organizes project into functional layers and slices. | \- High cohesion  <br>\- Clear feature separation | \- Initial complexity  <br>\- Requires thorough planning |
| **Microfrontends** | Each part of the application is deployed separately. | \- Independent deployments  <br>\- Scalable | \- High complexity  <br>\- Coordination needed between teams |

(с) [source](https://dev.to/alexanderop/how-to-structure-vue-projects-20i4)
:::

<!-- ::: details Подходящая структура для Vue 3 проекта -->
## Suitable architecture for Vue 3 web application

The most suitable architecture for a Vue 3 application is `Modular`.

Initially, the application is divided into logical modules that are loosely related to each other. For example, for an online store, it can be a product catalog module, a module of a single product, a user account module etc.

In addition, there is a shell module - what is sometimes referred to as `app shell`. A template with a header, footer, side menu and main window. It is wise to put utilities and resources used throughout the application into this module - for example, `api`, `useI18n`, `BaseButton`and`stringHelpers`.

Each module has its own `components`, `composables`, `assets`, `utils`; probably `api`, `routes`, `views`, `layouts`.

Within the `components` directory of each module, a hierarchy of components like in `atomic design` can be arranged if necessary

Loose coupling allows each module to be developed fairly independently, which greatly increases the likelihood of project success.

![image](/assets/images/modular-architecture.webp)

`Atomic design` and `FSD` were not invented for Vue, but for the frontend in general, and as a consequence contain excessive complexity and inconvenience.
