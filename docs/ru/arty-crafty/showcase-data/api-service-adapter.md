---
pageClass: arty-crafty
head:
  - - meta
    - name: og:site_name
      content: Arty-Crafty - проект онлайн магазина
  - - meta
    - name: og:image
      content: /images/arty-crafty-logo.png
  - - meta
    - name: twitter:image
      content: /images/arty-crafty-logo.png
---

# Работа с API на фронтенде

## Supabase адаптер

Теперь нужно реализовать такие же как в Hoppscotch запросы в коде нашего фронтенда. Для товаров категории и подробная информации о товаре это можно сделать сразу, заменив всего одну строку:

###### api/products.ts

```js
const products = {
  async categoryProducts(categoryId) {
    // return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
    const data = await http.get(`${SB}/categories?select=id,title,products(id,title,summary)&id=eq.${categoryId}`);
    return data[0].products;
  },
};
```

В `ProductCard` проставляем корректные пути к свойствам товара (`product.summary.price`) и категория показывается. Ранее `product.desc` бы переименован в базе данных в `product.summary`.

Теперь нужно загрузить в самом начале старта приложения все категории товаров, чтобы построить каталог.

```js
async categories() {
  return http.get(`${SB}/categories?select=id,title,data`);
},
```

Ну и запрос информации о товаре:

```js
async product(id: number) {
  const data = await http.get(`${SB}/products?select=id,title,summary,data&id=eq.${id}`);
  return data[0] ?? null;
},
```

Как видно, вынос транспортной логики в отдельный сервис сильно облегчает работу при замене бэкенда и делает код в основном приложении чище и понятней.
