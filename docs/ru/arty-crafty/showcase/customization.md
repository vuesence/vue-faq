---
pageClass: arty-crafty
head:
  - - meta
    - name: og:site_name
      content: Arty-Crafty project
  - - meta
    - name: og:image
      content: /images/arty-crafty-logo.png
  - - meta
    - name: twitter:image
      content: /images/arty-crafty-logo.png
---

# Кастомизация

## Персонализация

Заменим везде имя на "Arty-Crafty", изменим описание в `package.json`. Найдем в интернете подходящую иконку для логотипа, и заменим штатную.

Теперь скроем сайдбар в `tablet` и `desktop` режимах, потому что в нем должен быть каталог только в мобильном режиме. Для других каталог будет из меню в хедере.

Далее, мы будем делать приложение в [модульной архитектуре](/ru/frontend/architecture.html). Общие компоненты, утилиты, композаблы и ресурсы у нас будут в модуле `app`, то, что относится к каталогу, категориям товаров и самим товарам - в `products`, и так далее. Поэтому нужно в `src` создать дирректорию `app` и перенести всё в неё, с заменой  путей, где надо.

Загружаем все на GitHub и ставим тэг - [`v0.1`](https://github.com/vuesence/arty-crafty/tree/7a829598144028099082e413b00840ef45c644fe). Для этого нужно опубликовать релиз.

## Views

Чистим главную страницу, `i18n` убираем пока подальше. Переименовываем основные view на:

- HomeView (остается)
- ProductCategoryView
- ProductView

::: info Замечание
Я предпочитаю использовать термин View, а не Page потому, что View может быть частью другого View, а Page - нет (семантически).
:::

`ProductCategoryView` и `ProductView` убираем в директорию `views` модуля `products`.

## Routes

Обновляем `routes`. Добавляем роуты для `product`, `category`, `favourites`, `cart` и `login`

```js
const routes: RouteRecordRaw[] = [
  // ...
  {
    path: "/product/:productId",
    name: "product",
    component: ProductView,
  },
  {
    path: "/category/:categoryId",
    name: "category",
    component: ProductCategoryView,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: ProductCategoryView,
  },
  // ...
];
```

Маршруты пока оставляем в главном модуле, при росте их числа - разобьем.

Отмечаем, что в солидных магазинах ссылка на категорию выглядит примерно так: `/category/muzhskaya-odezhda-7542/`. То есть, slug названия категории и её id. У нас будет пока только `categoryId`, но в дальнейшем мы сделаем такую человеко-понятную ссылку - это полезная для UX и для SEO. То же самое с продуктами.

## Header

Делаем хедер - с лого, поисковой строкой, иконками корзины, логина/аккаунта, избранного справа, и снизу меню с 2-3 категориями.

На аналогичных сайтах поисковая строка может быть весьма непростой - с выпадающим меню с подсказками, например, или каталогом. Поэтому сразу выделим её в отдельный компонент - `AppSearchBar`. Находим в интернете подходящую стилизацию `input` и используем её.

Подходящие иконки можно поискать на [iconbuddy.app](https://iconbuddy.app/) и [icones.js.org](https://icones.js.org/). Для их отображения используем `BaseIcon`.

Добавляем немного эффектов, адаптивности, и получаем:

![](/ru/arty-crafty/assets/images/header-1.gif)

## Sidebar

В выдвигающемся слева сайдбаре также захардкодим несколько категорий. Более тщательную кастомизацию оставим на потом.

В итоге:

![](/ru/arty-crafty/assets/images/website-1.gif)

## Небольшой рефакторинг

Переименуем наш кастомизированный компонент `MantineSimpleHeader` в `AppHeader` и все остальные также.

Загружаем в репозиторий и ставим тэг - [`v0.2`](https://github.com/vuesence/arty-crafty/tree/3fedcb52cb3e9c24387f81a40396694d4c9eba75).

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
