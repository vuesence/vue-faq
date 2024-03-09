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

# Release Timeline

## Release timeline visualization

Visualize releases of any GitHub repository on a timeline, with information about commits and pull requests.

Embeds in VitePress, can be a good replacement for `changelog` in the project's technical documentation, automating description of changes and making tracking them convenient for users.

It can also be plugged into any HTML page as a Web component or micro-frontend.

![image](/en/release-timeline/assets/images/rt.jpg)

The library is written using Vue 3, has no dependencies, takes 15Kb unpacked. Adapted to work in VitePress (switching between light and dark themes). Can be plugged in as a `web component` in non-Vue projects.

Data on releases of a particular repository is taken via GitHub REST API.

Public repositories are available immediately, private repositories require GitHub API token.

## GitHub

- [GitHub](https://github.com/vuesence/release-timeline)

## Demo

- [Demo](https://vuesence.github.io/release-timeline/) (you can specify any repository via the selection in the upper left corner)

## Credits

[Parallax Star background in CSS](https://codepen.io/sarazond/pen/LYGbwj)
