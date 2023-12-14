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
# API module

## API (REST)


Creates a service transport client agnostic wrapper layer for REST calls to the backend over HTTP(S).


The HTTP transport client can be `fetch`, `axios` or a promiscuous version of `XHR`, at the developer's choice. With it, API calls in the code look as follows:

``js
import { api } from "@/services/api";

const apiData = ref();
apiData.value = await api.utils.testRest();
```

Each call is an asynchronous function that returns ``Promise``.

````js
// utils.ts
import http from "./http";

const utils = {
  async testRest() {
    return http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
```

The system of interceptors (`interceptors`) is also implemented.

The abstraction of backend access allows you to easily switch to another transport (JSON-RPC, WebSockets, gRPC, GraphQL) without changing the code in the business logic of the application.


## JSON-RPC

Sets up a JSON-RPC adapter to communicate with the backend. Calls to the backend API in the application code remain the same, but JSON-RPC is used instead of REST requests

------

Service initialization:

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