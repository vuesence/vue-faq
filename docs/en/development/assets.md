<!-- TODO: -->

# Application Resources

::: details Application Resources

Resources refer to images, icons, audio, video, json, pdf and other files that your application can use either internally or to display on a page.

:::

::: details Should I put images in the public or assets folder?

From the `public` folder, resources (e.g. images) are connected in your application via HTTP(S), downloaded as needed from the server - as they have always been.

Resources in the `assets` folder (and in general from any subdirectory in `src/`) are renamed (a hash is added - like `social-banner-e88a22df.png`) and placed in the `dist/assets` folder, or, if they are small images, they can be Base64 encoded and placed in your js bandle. In the browser application they are available immediately, but the size of the js bandle is increased by the size of the resources, which increases the loading speed.

The resources are accessed via import:

```js
// gets url to the resource
import imageUrl from "./image.img";

// gets raw (string) representation of the resource
import imageRaw from "./image.img?raw";
```

If you don't need to import/process the images in js, you can put them in the `public` folder and use them in the HTML template with their normal names.

See [Vite documentation](https://vitejs.dev/guide/assets.html) for more details.

:::

::: details How to connect images from assets?

Using images from the `public/images` folder is easy.

```html
// static image name
<img src="/images/someImage.png" />

// dynamic image name
<img :src="`/images/${imageNameInVariable}.png` />" />
```

Pictures (as well as other resources) from `assets` must be imported into JavaScript before use

```js
import imgUrl from './img.png'
// ...
<img :src="imgUrl" />
```

This returns the url to the resource.

:::

::: details Universal component for working with icons

Importing icons one by one is inconvenient when there are many of them, and often the icon needs to be changed dynamically depending on the conditions. To solve this problem you can create a universal class `BaseIcon`, which will display an icon by its name:

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
    { type: String,
    default: "24"
  },
  color: {
    type: String,
    default: "currentColor"
  },
  width: {
    { type: String,
    default: "24"
  },
  height: {
    type: String,
    default: "auto"
  },
  type: {
    type: String,
    default: "svg"
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

<style lang="scss" scoped>
:deep(svg) {
  width: 100%;
  height: 100%;

  path {
    fill: currentColor;
  }
}
</style>
```

The `/app/utils/icons.js` file uses Vite's `import.meta.glob` function to import files from masked directories:

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

The component will first try to look for the `svg` named `account`, then `png`.

:::

::: details Where to find icons?
Huge icon set with images from many libraries available in different formats - [iconify.design](https://iconify.design/)
:::

::: details What is the best format for pictures - jpg or png?

Try modern `webp`. Really strong compression with no apparent loss of quality. There is a transparent background.

Only IE is not supported, it requires a fallback picture in a different format (if you even care about the decade-old IE11).

:::

::: details How to import JSON?

```js
// import the entire object
import json from "./example.json";

// import a root field as named exports - helps with tree-shaking!
import { field } from "./example.json";
```

:::

```

```
