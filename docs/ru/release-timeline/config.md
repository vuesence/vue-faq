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

# Конфигурация

## Опции

```js
export const DefaultOptions = {
  github: {
    owner: "vuejs",
    repo: "vitepress",
    // number of releases to request
    size: 20,
    // GitHub API token for accessing private repositories
    token: "",
    // feedType: github or url
    feedType: "github",
    // url if getting data not from GitHub
    url: "",
  },
  timeline: {
    // Both coefficients below have to be chosen experimentally
    paddingTop: 0.1,
    // Affects the extent of the vertical line lengths when there is a
    // large gap in the dates dates between neighboring releases
    span: 200,
  },
  display: {
    releaseName: true,
    animatedBackground: true,
  },
};
```

## Стилизация

Библиотека использует CSS переменные для поддержки тем. По умолчанию они подключены к CSS переменным VitePress

```css
:root {
  --rt-c-text-1: var(--vp-c-text-1);
  --rt-c-text-2: var(--vp-c-text-2);
  --rt-c-text-3: var(--vp-c-text-3);
  --rt-c-divider: var(--vp-c-divider);
  --rt-c-bg-alt: var(--vp-c-bg-alt);
  --rt-c-brand-1: var(--vp-c-brand-1);
  --rt-c-brand-2: var(--vp-c-brand-2);
}
```

Вы можете переопределить их:

```vue
<style>
:root {
  --rt-c-text-1: #3c3c43;
  --rt-c-text-2: #3c3c43c7;
  --rt-c-text-3: #3c3c438f;
  --rt-c-divider: #e2e2e3;
  --rt-c-bg-alt: #f6f6f7;
  --rt-c-brand-1: #3451b2;
  --rt-c-brand-2: #3a5ccc;
}
</style>
```
