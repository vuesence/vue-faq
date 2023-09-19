# Backend link abstraction

## API service

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
