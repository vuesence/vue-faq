---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp builder
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# PWA

В приложение интегрируются простые Manifest и Service worker и работают сразу без настройки.

## manifest.json

Позволяет устанавливать приложение на домашний экран и запускать его в режиме, похожем на нативный (без окна браузера).

`manifest.json` должен быть отредактирован в соответствии с данными вашего приложения. Подробней о файле манифеста - [web.dev](https://web.dev/learn/pwa/web-app-manifest).

```json
{
  "description": "Acme Corporation webapp",
  "dir": "auto",
  "display": "standalone",
  "name": "Acme Inc.",
  "orientation": "any",
  "scope": "/",
  "short_name": "Acme",
  "start_url": "/",
  "categories": [
    "it",
    "development",
    "education"
  ],
  "icons": [...]
```

## Service worker

Позволяет сделать управляемым кэширование на стороне клиента и сильно улучшить пользовательский опыт.

Для данной реализации `service-worker.js` не используются сторонние библиотеки типа `Workbox`.

Для кэширования используется стратегия `Cache first`. Создаётся три отдельных кэша для разных типов ресурсов: `assets` (js и css), `images` и `fonts`. Для каждого поддерживается версионность.

При выпуске новой версии приложения можно изменять значение `VERSION` в [service-worker.js](https://github.com/vuesence/create-vue-webapp/blob/main/src/template/public/service-worker.js). Это очистит весь кэш в браузере клиента.