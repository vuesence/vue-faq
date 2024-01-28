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

```js
const products = {
  async categoryProducts(categoryId) {
    // return http.get(`/arty-crafty/api/category-products-${categoryId}.json`);
    const data = await http.get(`https://client_id.supabase.co/rest/v1/categories?select=id,title,products(id,title,desc)&id=eq.${categoryId}`);
    return data[0].products;
  },
};
```

В `ProductCard` проставляем корректные пути к свойствам товара (`product.desc.price`) и категория показывается.
Теперь нужно загрузить в самом начале старта приложения все категории товаров, чтобы построить каталог. Сделать это надо до
