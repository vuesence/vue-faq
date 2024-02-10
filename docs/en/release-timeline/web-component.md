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

## Usage

In HTML page:

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

## Configuration

The Web components specification allows only string values to be passed to them via attributes/props. Therefore data can be passed either via the `options` attribute in JSON serialised form, as shown above, or via a `window.rt_options` variable:

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

In this case the `options` attribute should be empty.

For the starred sky background, you must set `--rt-c-bg: transparent` and the desired background `background-color` to `body` or the desired container. This is only needed to use in `web-components` mode.

## Demo

You can see how `release-timeline` works as a web component here - <a target="_blank" href="https://unpkg.com/release-timeline/dist/wc-demo.html">wc-demo</a>.

This is just an html page, you can check out its code
