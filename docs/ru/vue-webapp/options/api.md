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

# API модуль

## API (REST)


Создает сервисный transport client agnostic слой-обертку для REST обращений к бэкенду по HTTP(S). 


В качестве HTTP транспортного клиента может использоваться `fetch`, `axios` или промисная версия `XHR`, на выбор разработчика. С помощью неё вызовы API в коде выглядят следующим образом:

```js
import { api } from "@/services/api";

const apiData = ref();
apiData.value = await api.utils.testRest();
```

Каждый вызов представляет из себя асинхронную функцию, возвращающую `Promise`.

```js
// utils.ts
import http from "./http";

const utils = {
  async testRest() {
    return http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
```

Так же реализована система перехватчиков (`interceptors`).

Абстракция обращения к бэкенду позволяет в дальнейшем при желании легко перейти на другой транспорт (JSON-RPC, WebSockets, gRPC, GraphQL) - без изменения кода в части бизнес-логики приложения.


## JSON-RPC

Устанавливает JSON-RPC адаптер для связи с бэкендом. Вызовы к бэкенд API в прикладном коде остаются такими же, но вместо REST запросов используется JSON-RPC

------

Инициализация сервиса:

```js
import utils from "./utils";
import { notificationInterceptor } from "./interceptors";
import jsonrpc from "./jsonrpc";
import http from "./http";

const api = {
  utils,
  http,
  init() {
    http.setOptions({
      baseUrl: import.meta.env.VITE_API_URL,
      headers: { "Content-Type": "application/json" },
    });
    jsonrpc.addResponseInterceptor(notificationInterceptor);
  },
};

export { api };
export default api;
```