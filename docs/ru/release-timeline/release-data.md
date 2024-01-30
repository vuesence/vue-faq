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

# Данные релизов и пул риквестов

## Получение данных

Есть три варианта получения данных с релизами с GitHub-а

1. Динамическое. Прямой запрос к GitHub REST API во время открытия страницы.
2. Запрос к GitHub REST API через прокси
3. Запрос к GitHub REST API во время билда проекта, оптимизация и сохранение данных локально на сайте.

На данный момент реализован только 1. вариант.

Второй вариант нужен для уменьшения размера загружаемого файла.

Третий вариант так же может оптимизировать потоки данных, но делает снэпшот релизов и рул риквестов на определенный момент времени. При выходе нового релиза потребуется пересобрать документацию.
