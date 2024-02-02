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

# Установка

## Установка пакета

```bash [pnpm]
pnpm add release-timeline
```

## Использование в коде Vue проекта

Во Vue компоненте:

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

Подключение `animated-background.css` опционально. CSS со звездным небом занимает 70Kb.

## Использование в VitePress

[Инструкция](./vitepress.md)

## Использование как web component

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/release-timeline@0.3.6/dist/index.umd.js"></script>
<link href="https://unpkg.com/release-timeline@0.3.6/dist/animated-background.css" rel="stylesheet" />

<release-timeline options=""></release-timeline>
```

Подробнее - о подключении как [web component](./web-component.md)
