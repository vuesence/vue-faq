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

# Micro-frontend

## Usage

Using `esm.sh` you can connect `release-timeline` as an ES module

In the HTML page:

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

You can see how `release-timeline` works as a micro-frontend here - <a target="_blank" href="https://unpkg.com/release-timeline/dist/esm-demo.html">esm-demo</a>

It is just an html page, you can check out its code
