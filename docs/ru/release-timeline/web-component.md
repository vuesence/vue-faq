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

# Web component

## Подключение

В HTML странице:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/release-timeline/dist/index.umd.js"></script>
<link href="https://unpkg.com/release-timeline/dist/animated-background.css" rel="stylesheet" />

<style>
body {
  --rt-c-text-1: rgba(255, 255, 245, 0.86);
  --rt-c-text-2: rgba(235, 235, 245, 0.6);
  --rt-c-text-3: rgba(235, 235, 245, 0.38);
  --rt-c-border: #2e2e32;
  --rt-c-bg: transparent;
  --rt-c-bg-issues: #1b1b1f;
  --rt-c-bg-alt: #161618;
  --rt-c-brand-1: #5c73e7;
  --rt-c-brand-2: #a8b1ff;
  --rt-c-circle-bg: #888;
  background-color: #1b1b1f;
}
</style>

<body>
  <release-timeline options="{&quot;github&quot;: {&quot;owner&quot;: &quot;vuejs&quot;, &quot;repo&quot;: &quot;vite&quot;}}" />
</body>

```

## Конфигурация

Спецификация Web components позволяет передавать им через аттрибуты/пропсы только строковые значения. Поэтому данные можно передать либо через аттрибут `options` в JSON сериализованном виде, как показано выше, либо через `window.rt_options` переменную:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://unpkg.com/release-timeline/dist/index.umd.js"></script>
<link href="https://unpkg.com/release-timeline/dist/animated-background.css" rel="stylesheet" />
<script>
  window.rt_options = {
    github: {
      owner: "vuesence",
      repo: "release-timeline"
    }
  };
</script>
<style>
body {
  --rt-c-text-1: rgba(255, 255, 245, 0.86);
  --rt-c-text-2: rgba(235, 235, 245, 0.6);
  --rt-c-text-3: rgba(235, 235, 245, 0.38);
  --rt-c-border: #2e2e32;
  --rt-c-bg: transparent;
  --rt-c-bg-issues: #1b1b1f;
  --rt-c-bg-alt: #161618;
  --rt-c-brand-1: #5c73e7;
  --rt-c-brand-2: #a8b1ff;
  --rt-c-circle-bg: #888;
  background-color: #1b1b1f;
}
</style>

<body>
  <release-timeline options="" />
</body>

```

В этом случае аттрибут `options` должен быть пустым.

Для фона звездного неба необходимо установить `--rt-c-bg: transparent` и нужный фоновый `background-color` на `body` или нужный контейнер. Это нужно только для подключения в режиме `web-components`.

## Demo

Посмотреть работу `release-timeline` как веб компонента можно тут - <a target="_blank" href="https://unpkg.com/release-timeline/dist/wc-demo.html">wc-demo</a>
Это просто html страница, можно посмотреть её код
