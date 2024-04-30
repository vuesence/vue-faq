# API service

::: details API service abstraction

To make calls to the backend, it is convenient to separate the code related to the transport layer (forming and sending a request) into a separate js module.

Then in your component access to your backend will look like this:

```js
import { api } from "@/services/api";

// loading.value = true;
const userData = await api.users.getUserData({ userId });
// loading.value = false;
```

All the complexity of backend communication is hidden in the `api` module.

Example `api.js`:

```js
import auth from "./auth";
import users from "./users";
import utils from "./utils";
import products from "./products";
import { authInterceptor, notificationInterceptor } from "./interceptors";
import http from "./http";
import { useAuth } from "@/user-account/composables/useAuth";

const api = {
  products,
  auth,
  users,
  utils,
  init() {
    http.setBaseUrl(import.meta.env.VITE_API_URL);
    // to set token into every request
    http.setTokenCallback(useAuth().getToken);
    http.setLogoutCallback(useAuth().logout);
    http.addResponseInterceptor(notificationInterceptor);
    http.addResponseInterceptor(authInterceptor);
  },
};

export { api };
export default api;
```

Example `users.js`

```js
import http from "./http";

const users = {
  async getUserData(params) {
    return await http.get("/api/users/user", params);
  },
};
```

`http.js` is a wrapper around requests to the server via your favorite library.

What is the convenience of abstracting the backend communication code from the main application code into a separate service?

You can easily replace `axios` with `fetch` or `XHR`, `REST` with `JSON-RPC` or `WebSockets`. The code in the components does not change and remains simple and explicit.

:::

::: details Where to do API requests from?

What is the best place in the component to request for data on the `backend API` - in the body of the `script setup`, or in the `onMounted` hook?

In **onMounted**.

1. You can't safely use `await` in the body of the script setup, it requires `Suspense` and makes the component asynchronous and unnecessarily complicates the application. So you have to use promise `then` or `IIFE` , which is much worse to read and less convenient.

2. If there is an uncaught error in the request, it cannot be handled in `script setup`, unlike the hook.

3. From the point of view of system design, `script setup` is a component constructor. It is illogical to request data from external sources in it.

4. There was repeated evidence that requests for data in `script setup` did not work correctly, but when moved to `onMounted` they worked. Depends on the context, but nevertheless.

:::
