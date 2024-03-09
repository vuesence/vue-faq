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

## Визуализация релизов

Визуализация релизов любого GitHub репозитория по временной шкале, с информацией о коммитах и пул риквестах.

Встраивается в VitePress, может быть хорошей заменой `changelog`-а в технической документации проекта, автоматизируя фиксацию изменений и делая слежение за ними удобным для пользователей.

Также может быть подключено в любой HTML странице как Web component или микрофронтенд.

![image](/ru/release-timeline/assets/images/rt.jpg)

Библиотека написана с использованием Vue 3, не имеет зависимостей, занимает 15Кб в распакованном виде. Адаптирована для работы в VitePress (переключение светлой и темной тем). Может подключаться как `web component` в не Vue проектах.

Данные по релизам определенного репозитория берутся через GitHub REST API.

Public репозитории доступны сразу, для private репозиториев требуется использовать GitHub API токен.

## Репозиторий

- [GitHub](https://github.com/vuesence/release-timeline)

## Demo

- [Demo](https://vuesence.github.io/release-timeline/) (можно задать любой репозиторий через выбор в верхнем левом углу)

## Credits

[Parallax Star background in CSS](https://codepen.io/sarazond/pen/LYGbwj)
