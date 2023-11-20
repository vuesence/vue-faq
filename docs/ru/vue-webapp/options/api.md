---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# API

Создает сервисный слой-обертку для REST обращений к бэкенду по HTTP(S). В качестве клиента может использоваться `fetch`, `axios` или промисная версия `XHR`, на выбор разработчика. С помощью неё вызовы API в коде выглядят следующим образом:

```js
import { api } from "@/services/api";

const users = ref([]);
users.value = await api.users.list()
```

Каждый вызов представляет из себя асинхронную функцию, возвращающую `Promise`.

Так же реализована система перехватчиков (interceptors).

Абстракция обращения к бэкенду позволяет в дальнейшем при желании легко переходить на другие транспортные протоколы (JSON-RPC, WebSockets, gRPC, GraphQL) - без изменения кода в части бизнес-логики приложения.