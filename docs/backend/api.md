# Абстракция канала связи с бэкендом

## API сервис

Для осуществления вызовов на бэк удобно выделить код, связанный с транспортным уровнем (формирование и отправка запроса) в отдельный js модуль.

Тогда в вашем компоненте доступ к вашему бэкенду будет выглядеть примерно так:

```js
import { api } from "@/services/api";

// loading.value = true;
const userData = await api.users.getUserData({ userId });
// loading.value = false;
```

Вся сложность связи с бэкендом спрятана в модуль `api`.

Пример `api.js`:

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

Пример `users.js`

```js
import http from "./http";

const users = {
  async getUserData(params) {
    return await http.get("/api/users/user", params);
  },
};
```

`http.js` - обертка вокруг запросов на сервер через вашу любимую библиотеку.

Чем удобно абстрагирование кода связи с бэкендом от основного кода приложения в отдельный сервис?

Можно легко заменить `axios` на `fetch` или `XHR`, `REST` на `JSON-RPC` или `WebSockets`. Код в компонентах не меняется и остается простым и явным.
