---
pageClass: arty-crafty
head:
  - - meta
    - name: og:site_name
      content: Arty-Crafty - проект онлайн магазина
  - - meta
    - name: og:image
      content: /images/arty-crafty-logo.png
  - - meta
    - name: twitter:image
      content: /images/arty-crafty-logo.png
---

# Избранное

## Иконка на карточке товара

При работе с карточками товара у нас появилась необходимость в "Избранном". На каждой карточке есть иконка "сердечка", которая при клике загорается или гаснет, - товар кладется в "Избранное" или убирается оттуда. Кроме того, есть отдельная страница "Избранное", показывающая все товары из него в том же виде, что и любая категория. А так же в главном `AppHeader` у нас есть иконка/ссылка "Избранное" с бэджиком, показывающим число товаров в нём.

Это первый случай, когда в приложении нужно использовать то, что на фронтенде гордо называется `state`, для своей работы требующий отдельный `state manager`. Благо, Vue 3 Composition API низвело этого царька до рядового члена команды, и с ним теперь можно работать как с обычной переменной, только реактивной.

## Композабл `useFavourites`

В композабле `useFavourites` для вышеуказанных задач нужны три функции: `toggleFavourite`, `listFavourites`, `isInFavourites` (чтобы подсвечивать иконку "сердечка").

::: details Сам код
```js
// src/products/composables/useFavourites.ts
import { ref } from "vue";

const favourites = ref < Set < number >> (new Set());

export function useFavourites() {
  function isInFavourites(productId: number): boolean {
    return favourites.value.has(productId);
  }

  function toggleFavourite(productId: number) {
    if (favourites.value.has(productId)) {
      favourites.value.delete(productId);
    } else {
      favourites.value.add(productId);
    }
  }

  function listFavourites() {
    return Array.from(favourites.value);
  }

  return { isInFavourites, toggleFavourite, listFavourites };
}
```
:::

Пример использования, например, в хедере:

```vue
<script setup lang="ts">
import { useFavourites } from "@/products/composables/useFavourites";
const { listFavourites } = useFavourites();
</script>

<template>
  <span class="badge">{{ listFavourites().length }}</span>
</template>
```

---

С точки зрения ООП мы инкапсулировали данные (`favourites`) и поведение (три функции) в одном объекте, неявно использовали шаблон проектирования `Singleton`, чтобы этот объект по всему приложению был только один, и работаем с реактивными данными так же просто и удобно, как и с обычными. Vue 3 дала возможность это делать.

## Сохранение между сессиями

Чтобы список "Избранное" сохранялся между браузерными сессиями, его можно сохранять в `LocalStorage`. Делается это не через плагины для `Pinia` или `Vueuse` функции, а двумя строчками:

```js
const initialSet = new Set(JSON.parse(localStorage.getItem("ac-favourites")));
const favourites = ref < Set < number >> (initialSet);
// ...
localStorage.setItem("ac-favourites", JSON.stringify(listFavourites()));
```

В дальнейшем возможно понадобится сохранять в `LocalStorage` и другие параметры нашего приложения и настройки пользователя, тогда список "Избранное" желательно будет объединить с ними в один объект и написать утилиту для него, но пока можно и так.

В итоге наш [useFavourites.ts](https://github.com/vuesence/arty-crafty/blob/main/src/products/composables/useFavourites.ts).

## Бэджик

При работе над иконкой в `AppHeader`, а также при наблюдении над другими магазинами можно обратить внимание, что бэджик с числом может быть не только над иконкой "Избранное", но и над "Заказы" и может и чем другим. Самое время вынести его в отдельный код. Хоть он и небольшой, но будет возможность менять стили в одном месте.

Варианта тут четыре - директива, отдельный компонент `IconBadge`, расширение функционала `BaseIcon` или новый компонент `IconWithBadge`. Директива логичней - как бы, бэдж принадлежт иконке. Компонент более явен, позволяет делать кастомизацию через пропсы, если понадобится, и, вообще, более читабельней. По третьему варианту - из-за двух мест усложнять `BaseIcon` точно не стоит. `IconWithBadge`, в принципе, неплохо выглядит.

Пока создаем компонент `IconBadge` в `app/components/ui`. Минус подхода - иконку с бэджем надо явно оборачивать в `div` с `position: relative`:

```vue-html
<div class="icon-wrapper">
  <BaseIcon size="20" name="favourites" class="icon" />
  <IconBadge :num="listFavourites().length" />
</div>
```

По сути, это и есть `IconWithBadge` если мы захотим позже его реализовать.

## Tag и CMV

Загружаем в репозиторий и ставим тэг - [`v0.3`](https://github.com/vuesence/arty-crafty/tree/v0.3)

[Coding music video](https://photos.google.com/share/AF1QipPaGf2RnGHrHhRIq0r6X8uoojZr-8n0WlkTZmwIcKOBYJXm04F7P5jAvHgi1CtF7A/photo/AF1QipMPkN6CCMlOdwlg5H0TVkJYsswMq5JvuJGBvt67?key=R05CcnF4Y3BibXRiSHRKUVdZd0wzVWt4VFM1UUhB)
