---
pageClass: release-timeline
head:
  - - meta
    - name: og:site_name
      content: Release timeline - visual component displaying GitHub release timeline
  - - meta
    - name: og:image
      content: /images/vue-faq-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-faq-logo.png
---

# Vue 3 проект

## Установка пакета

::: code-group
```bash [pnpm]
pnpm add release-timeline
```
```bash [yarn]
pnpm add release-timeline
```
```bash [npm]
npm install release-timeline
```
:::

## Использование во Vue компоненте

```vue
<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
// import "release-timeline/dist/animated-background.css";

// repository to visualize
options.github.owner = "vuesence";
options.github.repo = "release-timeline";
</script>

<ReleaseTimeline :options="options" />
```

Подключение `animated-background.css` опционально. CSS со звездным небом занимает 70Kb, в gzip формате - 6.1Кб.
