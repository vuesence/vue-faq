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

# VitePress

`release-timeline` полностью поддерживает VitePress, включая смену светлой и темной тем и адаптацию к его стилям.

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

## Подключение

Подключение в любом markdown файле:

```vue
<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/vitepress.css";
// import "release-timeline/dist/animated-background.css";

options.github.owner = "vuesence";
options.github.repo = "release-timeline";
</script>

<ReleaseTimeline :options="options" />
```

## CSS переменные

CSS переменные `release-timeline` подключаются к CSS переменным VitePress в `vitepress.css`. Вот его содержимое:

```css
:root {
  --rt-c-text-1: var(--vp-c-text-1);
  --rt-c-text-2: var(--vp-c-text-2);
  --rt-c-text-3: var(--vp-c-text-3);
  --rt-c-border: var(--vp-c-border);
  --rt-c-bg: var(--vp-c-bg);
  --rt-c-bg-alt: var(--vp-c-bg-alt);
  --rt-c-brand-1: var(--vp-c-brand-1);
  --rt-c-brand-2: var(--vp-c-brand-2);
  --rt-c-circle-bg: #888;
  --rt-font-family-base: var(--vp-font-family-base);
}
```
