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

# Installation

## Installation of the npm package

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

## Usage in Vue project code

In a Vue component:

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

Import of the `animated-background.css` is optional. CSS with starred sky takes 70Kb, in gzip format - 6.1Kb.

## Use in VitePress

[Instructions](./vitepress.md)

## Use as web component

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/release-timeline@0.3.6/dist/index.umd.js"></script>
<link href="https://unpkg.com/release-timeline@0.3.6/dist/animated-background.css" rel="stylesheet" />

<release-timeline options=""></release-timeline>
```

Read more about connecting as [web component usage](./web-component.md)
