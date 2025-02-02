# Comparison of Different Reactive State Management Techniques in Vue

You can organize the exchange of [reactive] data in a Vue 3 application in several ways.

## 1. Prop Drilling

Prop drilling is a situation where props are passed through several components that do not use them themselves, only to deliver data to the component that actually needs them.

Let's look at an example:

```vue
<script setup>
const user = {
  name: 'John',
  email: 'john@example.com'
}
</script>

<template>
  <div>
    <Header :user="user" />
  </div>
</template>
```

```vue
<!-- Header.vue -->
<script setup>
const props = defineProps(['user'])
</script>

<template>
  <header>
    <Nav :user="user" />
  </header>
</template>
```

```vue
<!-- Nav.vue -->
<script setup>
const props = defineProps(['user'])
</script>

<template>
  <nav>
    <UserMenu :user="user" />
  </nav>
</template>
```

```vue
<!-- UserMenu.vue -->
<script setup>
const props = defineProps(['user'])
</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>
```

Transmission scheme for prop drilling:

```
App.vue (:user)
   |
   +-- Header.vue (:user)
       |
       +-- Nav.vue (:user)
           |
           +-- UserMenu.vue (использует user)
```

**Pros:**
- Explicit data transmission
- Easy to track data flow
- No additional tools required
- Works well for small applications

**Cons:**
- Clutters code with a large number of props
- Complicates refactoring
- Intermediate components receive unnecessary props
- Difficult to maintain with deep nesting

## 2. Provide/Inject

Vue provides a built-in provide/inject mechanism for passing data through multiple component levels:

```vue
<!-- App.vue -->
<script setup>
import { provide } from 'vue'

const user = {
  name: 'John',
  email: 'john@example.com'
}

provide('user', user)
</script>
```

```vue
<!-- UserMenu.vue -->
<script setup>
import { inject } from 'vue'

const user = inject('user')
</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>
```

Provide/Inject workflow scheme:

```
App.vue
   |
   +-- provide('user')
   |
   +-- Header.vue
       |
       +-- Nav.vue
           |
           +-- UserMenu.vue
               |
               +-- inject('user')
```

**Pros:**
- Built-in Vue solution
- Easy to use
- No additional dependencies required
- Suitable for passing data through many levels

**Cons:**
- Difficult to trace data source
- No Vue DevTools support
- Possible injection name conflicts
- No built-in typing (requires additional TypeScript configuration)

## 3. Composition API

Another approach is to use `Vue Reactivity API` directly, by exporting reactive state from a `js` module:

```js
// useUser.js
import { ref } from 'vue'

export const user = ref({
  name: 'John',
  email: 'john@example.com'
})

export function updateUser(newUser) {
// ...
}

```

```vue
<!-- UserMenu.vue -->
<script setup>
import { user } from './useUser'
</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>
```

Composition API workflow scheme:

```
useUser.js (ref + методы)
    |
    +-- ComponentA.vue (импорт + использование)
    |
    +-- ComponentB.vue (импорт + использование)
    |
    +-- ComponentC.vue (импорт + использование)
```

You can keep both the `ref` and its working logic in one file, obtaining an analogue of an OOP object.

With this construction, you can encounter cyclic JS imports - if A imports B, where b = `ref()` is defined, and B imports C, which uses b (for example, in `watch`), then b will be "undefined" in C.

Creating an explicit singleton would be a more competent solution (for example, creating a composable function and exporting/providing it for the entire application, or other variations).

**Pros:**
- Excellent logic encapsulation
- Allows full use of `Vue Reactivity API`
- Easy to test
- Good reusability
- Explicit dependencies

**Cons:**
- Requires proper code structuring
- No centralized state management
- Harder to debug
- Possible cyclic dependencies

## 4. Global Store (Pinia)

For more complex cases, you can use the state manager `Pinia`:

```js
// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: 'John',
      email: 'john@example.com'
    }
  })
})
```

```vue
<!-- UserMenu.vue -->
<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <div>
    {{ userStore.user.name }}
  </div>
</template>
```

Pinia workflow scheme:

```
stores/user.js (state + actions + getters)
    |
    +-- DevTools <--> Pinia Store
    |
    +-- ComponentA.vue (useUserStore())
    |
    +-- ComponentB.vue (useUserStore())
    |
    +-- ComponentC.vue (useUserStore())
```

**Pros:**
- Centralized state management
- Integration with Vue DevTools
- `SSR` support
- Built-in TypeScript support
- Better suited for working in a large team

**Cons:**
- Additional dependency
- Performance drop compared to simply using ref
- Excessive for small applications
- Requires configuration
- More code for simple cases

## 5. Event Bus

Another approach is using an event bus. Although Vue 3 doesn't have a built-in Event Bus like Vue 2, we can use external libraries like `mitt`:

```js
// eventBus.js
import mitt from 'mitt'

export const eventBus = mitt()

// Типизация событий (опционально)
type Events = {
  'user-updated': { name: string, email: string }
  'user-deleted': { id: number }
}

export const typedEventBus = mitt<Events>()
```

Использование:

```vue
<!-- ComponentA.vue -->
<script setup>
import { eventBus } from './eventBus'

const sendUser = () => {
  eventBus.emit('user-updated', { 
    name: 'John',
    email: 'john@example.com'
  })
}
</script>
```

```vue
<!-- ComponentB.vue -->
<script setup>
import { eventBus } from './eventBus'
import { onMounted, onUnmounted } from 'vue'

const handleUser = (user) => {
  console.log('Получены данные пользователя:', user)
}

onMounted(() => {
  eventBus.on('user-updated', handleUser)
})

onUnmounted(() => {
  eventBus.off('user-updated', handleUser)
})
</script>
```

Using an Event Bus is *most often* unjustified and introduces confusion into the code, so it is sometimes called an anti-pattern for frontend.

There are cases where Event Bus can be useful, for example, when implementing WebSocket work. But in this case, it works as a `Proxy` or `Facade` for the WS client (to make reconnection possible when the connection is broken), rather than as part of the reactive system.

Event Bus workflow scheme:

```
eventBus.js
    |
    +-- ComponentA.vue (emit)
    |    |
    |    +-- событие 'user-updated' ----+
    |                                   |
    +-- ComponentB.vue (<---------------+)
    |    |
    |    +-- on('user-updated')
    |
    +-- ComponentC.vue
         |
         +-- on('user-updated')
```

**Pros:**
- Simple implementation
- Flexibility in component communication
- No need for hierarchical component relationships
- Easy to add new subscribers

**Cons:**
- Difficult to track data flow
- Possible memory leaks with improper cleanup
- No default event typing

## When to Use What?

1. **Prop Drilling** is optimal when:
   - The application has a simple and shallow component structure
   - The number of passed props is small
   - Data is needed only in nearby components
   - No need for complex state management logic
   - Maximum data transmission transparency is important
   - The project is small or in the prototyping stage

2. **Provide/Inject** is well-suited for:
   - Passing data through many component levels
   - When data is needed only in a specific component tree branch
   - Cases with theming or localization

3. **Composition API** is optimal when:
   - Reusable logic is needed
   - Data is used in different parts of the application
   - Encapsulation of complex logic is required

4. **Pinia** is the best choice if:
   - Global state is needed
   - `SSR` support is required
   - Vue DevTools support is necessary
   - Typing (TypeScript) is important

5. **Event Bus** can be useful in cases:
   - When the main data transmission system is built on it
   - Working with WebSocket
   - Specific scenarios
   - Simple communication between unrelated components

## Conclusions

- Prop drilling is not always a problem
- Provide/inject is a simple built-in solution
- Module refs are a powerful tool for reusable logic
- Pinia is a comprehensive state management solution
- Event Bus can be useful in specific cases

Choosing an approach depends on the specific case and project requirements. Sometimes simple prop passing can be the most understandable solution.
