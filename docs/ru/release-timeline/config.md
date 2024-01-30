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

## Конфигурационный файл

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
