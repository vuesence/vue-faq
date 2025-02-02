<!-- TODO: -->

# Ресурсы приложения

::: details Ресурсы приложения

Под ресурсами понимаются изображения, иконки, аудио, видео, json, pdf и прочие файлы, которые может использовать ваше приложение либо внутри себя, либо для показа на странице.

:::

::: details Картинки класть в папку public или assets?

Из папки `public` ресурсы (например, изображения) подключаются в вашем приложении по протоколу HTTP(S), загружаясь по необходимости с сервера - как они это делали всегда.

Ресурсы в папке `assets` (и вообще из любой поддиректории в `src/`) при билде приложения переименовываются (добавляется хэш - типа `social-banner-e88a22df.png`) и помещаются в папку `dist/assets`, либо, если это картинки маленького размера, они могут кодироваться в Base64 и помещаться в ваш js бандл. Это делает их сразу доступными в приложении, но увеличивает размер бандла, что негативно влияет на время загрузки. Чем больше бандл, тем дольше загрузка и разбор, что может замедлять старт приложения.

Доступ к ресурсам осущестляется через import:

```js
// gets url to the resource
import imageUrl from "./image.img";

// gets raw (string) representation of the resource
import imageRaw from "./image.img?raw";
```

Если вам не нужно импортировать/обрабатывать картинки в js, вы можете положить их в папку `public` и использовать их в HTML шаблоне с их обычными именами.

Более подробно в [документации Vite](https://vitejs.dev/guide/assets.html)

:::

::: details Как подключать картинки из assets?

Использовать картинки из папки `public/images` - элементарно

```html
// static image name
<img src="/images/someImage.png" />

// dynamic image name
<img :src="`/images/${imageNameInVariable}.png`" />
```

Картинки (как и другие ресурсы) из `assets` должны быть перед использованием импортированы в JavaScript

```js
import imgUrl from './img.png'
// ...
<img :src="imgUrl" />
```

При этом возвращается url до ресурса.

:::

::: details Универсальный компонент для работы с иконками

Импортировать иконки по одной неудобно, когда их много, и часто иконку нужно менять динамично в зависимости от условий. Чтобы решить эту проблему можно создать универсальный класс `BaseIcon`, который будет отображать иконку по её имени:

```vue
<BaseIcon name="account" size="26" />
```

#### BaseIcon

```vue
<script setup>
import { computed } from "vue";
import { getImageUrl, getSvgIcon } from "@/app/utils/icons";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "24",
  },
  color: {
    type: String,
    default: "currentColor",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "auto",
  },
  type: {
    type: String,
    default: "svg",
  },
});

const width = computed(() => {
  return props.size ? `${props.size}px` : `${props.width}px`;
});
const height = computed(() => {
  return props.size ? `${props.size}px` : `${props.height}px`;
});
</script>

<template>
  <div
    v-if="getSvgIcon(props.name)"
    class="base-icon"
    :style="{
      width,
      height,
      color: props.color,
    }"
    v-html="getSvgIcon(props.name)"
  />
  <img
    v-else
    :src="getImageUrl(props.name)"
    :style="{
      width,
      height,
      minWidth: width,
      minHeight: height,
    }"
  />
</template>

<style lang="css" scoped>
:deep(svg) {
  width: 100%;
  height: 100%;

  path {
    fill: currentColor;
  }
}
</style>
```

Файл `/app/utils/icons` использует функцию Vite `import.meta.glob` для импорта файлов из директорий по маске:

#### icons.js

```js
const svgResources = new Map();
const imageResources = new Map();

function loadIcons() {
  let modules = import.meta.glob("@/assets/images/icons/**/*.svg", {
    as: "raw",
    eager: true,
  });
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4);
    svgResources.set(name, modules[fileName]);
  }

  modules = import.meta.glob("@/assets/images/**/*.png", {
    as: "url",
    eager: true,
  });
  for (const fileName in modules) {
    const name = fileName.substring(fileName.lastIndexOf("/") + 1, fileName.length - 4);
    imageResources.set(name, modules[fileName]);
  }
}

function getSvgIcon(name) {
  return svgResources.get(name);
}

function getImageUrl(name) {
  return imageResources.get(name);
}

export { loadIcons, getSvgIcon, getImageUrl, svgResources };
```

Сперва компонент попробует поискать `svg` с именем `account`, затем `png`.

:::

::: details Где искать иконки?
Огромный сборник со всех библиотек с возможностью взять в svg формате - [iconify.design](https://iconify.design/)
:::

::: details Какой формат для картинок лучше - jpg или png?

Попробуйте современный `webp`. Действительно сильное сжатие без видимой потери качества. Есть прозрачный фон.

Не поддерживается только IE, для него нужна fallback картинка в другом формате (если вы вообще заботитесь о десятилетнем IE11).

:::

::: details Как импортировать JSON?

```js
// import the entire object
import json from "./example.json";

// import a root field as named exports - helps with tree-shaking!
import { field } from "./example.json";
```

:::
