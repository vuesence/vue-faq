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

Состоит из компонента [BaseIcon](https://github.com/vuesence/vue-webapp/blob/main/src/components/ui/BaseIcon.vue) и утилиты [utils.ts](https://github.com/vuesence/vue-webapp/blob/main/src/utils/icons.ts).

Позволяет использовать в приложении иконки с динамичным обращением к ним по имени:

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

`utils.ts` при инициализации с помощью `import.meta.glob` считывает из директории `@/assets/images/` все файлы с расширениями `.svg` и `.png` и использует их имена как идентификаторы иконок для `BaseIcon`.