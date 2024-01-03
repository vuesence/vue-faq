---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp builder
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# BaseIcon

Consists of the [BaseIcon](https://github.com/vuesence/vue-webapp/blob/main/src/components/ui/BaseIcon.vue) component and the [utils.ts](https://github.com/vuesence/vue-webapp/blob/main/src/utils/icons.ts) utility.

Allows to use an icon component in the application with dynamic name attribute:

```vue
<script setup lang="ts">
import BaseIcon from "@/components/ui/BaseIcon.vue";
import { useAppConfig } from "@/composables/useAppConfig";

const { isDrawerOpen } = useAppConfig();
</script>

<template>
  <header class="header">
    <BaseIcon name="hamburger" class="drawer-toggle" @click="isDrawerOpen = !isDrawerOpen" />
  </header>
</template>
```

`utils.ts` when initialized uses `import.meta.glob` to read all files with extensions `.svg` and `.png` from the `@/assets/images/` directory and uses their names as icon identifiers for `BaseIcon`.