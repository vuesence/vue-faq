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

Simple Manifest and Service worker are integrated into the application and work right away, without customization.

## Manifest.json

Allows to install the application on user home screen and run it in native mode (without a browser window).

`manifest.json` must be edited to match your application data. For more information about the manifest file, see [web.dev](https://web.dev/learn/pwa/web-app-manifest).

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

Allows to make client-side caching manageable and greatly improve UX.

This implementation of `service-worker.js` does not use third-party libraries like `Workbox`.

The `Cache first` strategy is used for caching. Three separate caches are created for different types of resources: `assets` (js and css), `images` and `fonts`. Versioning is supported for each.

With the release of a new version of the application you can change the value of `VERSION` in [service-worker.js](https://github.com/vuesence/create-vue-webapp/blob/main/src/template/public/service-worker.js). This will clear all cache in the client browser.