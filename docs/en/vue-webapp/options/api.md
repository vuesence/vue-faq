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
# API module

## API (REST)

Creates a transport client agnostic service layer for REST calls to the backend over HTTP(S).

The HTTP transport client can be `fetch`, `axios` or a promise version of `XHR`, at the developer's choice. API calls in the application code will look as follows:

```js
import { api } from "@/services/api";

const apiData = ref();
apiData.value = await api.utils.testRest();
```

Each call is an asynchronous function that returns `Promise`.

```js
// utils.ts
import http from "./http";

const utils = {
  async testRest() {
    return http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
```

The system of interceptors (`interceptors`) is also implemented.

The abstraction of backend API access allows to easily switch to another transport (JSON-RPC, WebSockets, gRPC, GraphQL) without changing the code in the business logic of the application.


## JSON-RPC

Sets up a JSON-RPC adapter to communicate with the backend. Calls to the backend API in the application code remain the same, but JSON-RPC is used instead of REST requests

```js
// utils.ts
import { jsonRpc } from "./jsonrpc";

const utils = {
  async testJsonRpc() {
    return jsonRpc({
      method: "getBestBlockHash",
      params: {},
    }, { uri: "https://seed-1.testnet.networks.dash.org:1443/" });
  },
}
```

JSON-RPC adapter implements [JSON-RPC 2.0 specification](https://www.jsonrpc.org/)

------

API module initialization:

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
      headers: { "Content-Type": "application/json" }
    });
    jsonrpc.addResponseInterceptor(notificationInterceptor);
  },
};

export { api }
export default api;
```

::: tip
The JSON-RPC protocol is very convenient and is the de facto standard for web 3.0. Recommended for use instead of REST
:::