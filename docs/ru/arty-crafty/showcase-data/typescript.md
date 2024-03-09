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

# TypeScript

## index.d.ts

Пришло время добавить типы. У нас уже есть две основных сущности - `Product` и `ProductCategory`. Их определяем в `index.d.ts` файле:

```ts
interface Product {
  id: number
  title: string
  summary?: any
  data?: any
}
interface ProductCategory {
  id: number
  title: string
  data?: any
}
```

Содержимое `summary` и `data` будет еще меняться, поэтому пока оставляем их `any`.

## Типизация

Добавляем типы в API сервис и в бизнес-логику:

```ts
const products = {
  async product(id: number): Promise<Product> {
    const data = await http.get(`${SB}/products?select=id,title,summary,data&id=eq.${id}`);
    return data[0] ?? null;
  }
};
// ...

const product = ref<Product>();
product.value = await api.products.product(props.productId);
```
