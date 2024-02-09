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

# Микрофронтенд

## Подключение

С помощью `esm.sh` можно подключить `release-timeline` как ES module

В HTML странице:

```html
<head>
  <link rel="stylesheet" crossorigin href="https://unpkg.com/release-timeline/dist/style.css">
  <link rel="stylesheet" crossorigin href="https://unpkg.com/release-timeline/dist/animated-background.css">
  <script type="module">
    import { mountRT } from "https://esm.sh/release-timeline";
    const options = {
      github: {
        owner: "vuesence",
        repo: "release-timeline"
      },
    };
    mountRT(options);
  </script>
</head>
<body class="dark">
  <div id="release-timeline" />
</body>
```
## Demo

Посмотреть работу `release-timeline` как веб компонент можно тут - <a target="_blank" href="https://unpkg.com/release-timeline/dist/esm-demo.html">esm-demo</a>
Это просто html страница, можно посмотреть её код
