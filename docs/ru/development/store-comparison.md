# Сравнение различных тактик работы с реактивным стейтом во Vue

Организовать обмен [реактивными] данными во Vue 3 приложении можно несколькими способами.

## 1. Prop drilling

Prop drilling - это ситуация, когда пропсы передаются через несколько компонентов, которые сами их не используют, только чтобы доставить данные до компонента, которому они действительно нужны.

Давайте рассмотрим пример:

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

Как видно, объект `user` передается через несколько компонентов, пока не достигает `UserMenu`, где он действительно используется. Это и есть prop drilling.

Схема передачи данных при prop drilling:

```
App.vue (:user)
   |
   +-- Header.vue (:user)
       |
       +-- Nav.vue (:user)
           |
           +-- UserMenu.vue (использует user)
```

**Плюсы:**
- Явная передача данных
- Легко отследить поток данных
- Не требует дополнительных инструментов
- Хорошо работает для небольших приложений

**Минусы:**
- Загромождает код при большом количестве пропсов
- Усложняет рефакторинг
- Компоненты-посредники получают ненужные им пропсы
- Сложно поддерживать при глубокой вложенности

## 2. Provide/Inject

Vue предоставляет встроенный механизм provide/inject для передачи данных через несколько уровней компонентов:

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

Схема работы provide/inject:

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

**Плюсы:**
- Встроенное решение Vue
- Простота использования
- Не требует дополнительных зависимостей
- Подходит для передачи данных через много уровней

**Минусы:**
- Сложно отследить источник данных
- Нет поддержки Vue DevTools
- Возможны конфликты имен инъекций
- Нет встроенной типизации (требуется дополнительная настройка TypeScript)

## 3. Composition API

Другой подход - использование `Vue Reactivity API` напрямую, с экспортом реактивного стейта из `js` модуля:

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

Данный подход иногда называется глобальными рефами или модульными рефами.

Схема работы Composition API:

```
useUser.js (ref + методы)
    |
    +-- ComponentA.vue (импорт + использование)
    |
    +-- ComponentB.vue (импорт + использование)
    |
    +-- ComponentC.vue (импорт + использование)
```

Можно держать в одном файле и сам `ref`, и логику его работы, получив аналог объекта ООП.

С данной конструкцией можно попасть на цикличные `js` импорты - если А импортирует Б, в котором определен б = `ref()`, и Б импортирует С, который использует б (например, в `watch`), то в С получится "не определенный" б.

Явное создание синглтона будет более грамотным решением (например, создание composable функции и export/provide её на все приложение, либо другие вариации).

**Плюсы:**
- Отличная инкапсуляция логики
- Позволяет в полной мере использовать возможности `Vue Reactivity API`
- Легко тестировать
- Хорошая переиспользуемость
- Явные зависимости

**Минусы:**
- Требует правильной структуризации кода
- Нет централизованного управления состоянием
- Сложнее отлаживать
- Возможны цикличные зависимости

## 4. Глобальное хранилище (Pinia)

Для более сложных случаев можно использовать менеджер состояний `Pinia`:

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

Схема работы Pinia:

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

**Плюсы:**
- Централизованное управление состоянием
- Интеграция с Vue DevTools
- Поддержка `SSR`
- Встроенная поддержка TypeScript
- Лучше подходит для работы в большой команде

**Минусы:**
- Дополнительная зависимость
- Падение производительности по сравнению с просто использованием ref
- Избыточно для небольших приложений
- Требует настройки
- Больше кода для простых случаев

## 5. Event Bus

Еще один подход - использование событийной шины (`EventBus`). Хотя во Vue 3 нет встроенного Event Bus как в Vue 2, мы можем использовать внешние библиотеки вроде `mitt`:

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

Использование `EventBus` *вместе* в системой реактивности `Vue`, чаще всего, неоправданно и вносит путаницу в код, поэтому его иногда называют антипаттерном для фронтенда.

Есть случаи, когда `EventBus` может быть полезен, например, при реализации работы с `WebSocket`. Но в этом случае он работает как `Proxy` или `Facade` для WS клиента (чтобы сделать возможным переподключение при разрыве соединения), а не как часть реактивной системы.

Схема работы Event Bus:

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

**Плюсы:**
- Простая реализация
- Гибкость в коммуникации между компонентами
- Не требует иерархической связи между компонентами
- Легко добавлять новых подписчиков

**Минусы:**
- Сложно отслеживать поток данных
- Возможны утечки памяти при неправильной очистке
- Нет типизации событий по умолчанию

## Когда что использовать?

1. **Prop Drilling** - оптимален когда:
   - Приложение имеет простую и неглубокую структуру компонентов
   - Количество передаваемых пропсов невелико
   - Данные нужны только в ближайших компонентах
   - Нет необходимости в сложной логике управления состоянием
   - Важна максимальная прозрачность передачи данных
   - Проект небольшой или находится в стадии прототипирования

2. **Provide/Inject** - хорошо подходит для:
   - Передачи данных через много уровней компонентов
   - Когда данные нужны только в определенной ветке дерева компонентов
   - В случаях с темизацией или локализацией

2. **Composition API** - оптимально когда:
   - Нужна переиспользуемая логика
   - Данные используются в разных частях приложения
   - Требуется инкапсуляция сложной логики

3. **Pinia** - лучший выбор если:
   - Нужно глобальное состояние
   - Нужна поддержка `SSR`
   - Необходима поддержка Vue DevTools
   - Важна типизация (TypeScript)

4. **Event Bus** - может быть полезен в случаях:
   - Когда основная система передачи данных построена на нем
   - Работы с WebSocket
   - Специфичных случаях
   - Простой коммуникации между несвязанными компонентами

## Выводы

- Prop drilling - не всегда проблема
- Provide/inject - простое встроенное решение
- Модульные рефы - мощный инструмент для переиспользуемой логики
- Pinia - комплексное решение для управления состоянием
- Event Bus - может быть полезен в специфичных случаях

Выбор подхода зависит от конкретного случая и требований проекта. Иногда простая передача пропсов может быть самым понятным решением.
