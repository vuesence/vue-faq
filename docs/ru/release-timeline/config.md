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

Обязательные опции: `owner` и `repo`

## Опции

```js
export const DefaultOptions = {
  // Main page title
  title: "Releases",
  github: {
    // repository owner
    owner: "vuejs",
    // repo to get release information from
    repo: "vitepress",
    // GitHub API token for accessing private repositories
    token: "",
    // feedType: github or url
    releases: {
      // feedType: github or url
      feedType: "github",
      // url to get releases from
      url: "/releases.json",
      // number of releases to get
      size: 20,
    },
    pulls: {
      feedType: "github",
      url: "",
      size: 100,
    },
    commits: {
      feedType: "github",
      url: "",
      size: 200,
    },
  },
  timeline: {
    // Both coefficients below have to be chosen experimentally
    paddingTop: 0.1,
    // Affects the extent of the vertical line lengths when there is a
    // large gap in the dates dates between neighboring releases
    span: 200,
  },
  // display or not specific parts of information
  display: {
    animatedBackground: true,
    animatedBackgroundForLightTheme: false,
    release: {
      name: true,
      username: true,
      desc: true,
      pulls: true,
      commits: true,
      hidePullUsername: true,
      hideCommitUsername: false,
      hideMergeCommits: true,
      // defaultOpenTab: "pulls",
    },
  },
};
```

## Стилизация

Библиотека использует CSS переменные для поддержки тем. Вы можете переопределить их под свою цветовую гамму.

Значения по умолчанию представлены ниже:

```vue
<style>
:root {
  --rt-c-text-1: #3c3c43;
  --rt-c-text-2: #3c3c43c7;
  --rt-c-text-3: #3c3c438f;
  --rt-c-border: #e2e2e3;
  --rt-c-bg: #ffffff;
  --rt-c-issues: #ffffff;
  --rt-c-bg-alt: #f6f6f7;
  --rt-c-brand-1: #3451b2;
  --rt-c-brand-2: #3a5ccc;
  --rt-c-circle-bg: #888;
}

.dark {
  --rt-c-text-1: rgba(255, 255, 245, 0.86);
  --rt-c-text-2: rgba(235, 235, 245, 0.6);
  --rt-c-text-3: rgba(235, 235, 245, 0.38);
  --rt-c-border: #2e2e32;
  --rt-c-bg: #1b1b1f;
  --rt-c-bg-issues: #1b1b1f;
  --rt-c-bg-alt: #161618;
  --rt-c-brand-1: #5c73e7;
  --rt-c-brand-2: #a8b1ff;
  --rt-c-circle-bg: #888;
}
</style>

Для перехода на темную тему необходимо установить CSS класс `dark` на одном из родителей.
```
