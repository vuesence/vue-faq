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

# Данные релизов, коммитов и пул риквестов

## Получение данных

Есть три варианта получения данных с releases, pull requests и commits с GitHub-а

1. Динамическое. Прямой запрос к GitHub REST API во время открытия страницы.
2. Запрос к GitHub REST API через прокси
3. Запрос к GitHub REST API во время билда проекта, оптимизация и сохранение данных локально на сайте.

На данный момент непосредственно реализованы первый и второй вариант, есть возможность указать `url` для запросов releases, pull requests и commits. По умолчанию используется первый.

Второй вариант нужен для уменьшения размера загружаемого файла., так как 95% данных в ответах GitHub - не используется в программе.

Формат данных при этом должен быть как у GitHub, но может содержать только нужные поля.

Третий вариант также может оптимизировать потоки данных, но делает снэпшот релизов и пул риквестов на определенный момент времени. При выходе нового релиза потребуется пересобрать документацию. В данном случае также нужно указать корректный url. Реализовывать логику третьего варианта (получение, фильтрация, сохранение даннах) необходимо пользователю пакета.
