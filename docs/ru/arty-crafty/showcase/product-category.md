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

# Категория товаров

## Layout

Страница категории товаров выглядит как идущие рядами и колонками карточки товаров. Число колонок зависит от ширины экрана. В мобильном варианте - только одна колонка на ширину устройства.

Сверху страницы название категории, возможно её описание и breadcrumbs (путь к категории в каталоге).

Карточки разместить можно с помощью `flexbox` (flex-wrap) и `grid`. Мне привычнее первый, поэтому использую его. Для самой карточки товара создаем компонент `ProductCard`.

![image](/ru/arty-crafty/assets/images/product-category.jpg)

## Данные и API

Если посмотреть другие магазины, то на карточках товара обычно одна или несколько картинок, название, краткое описание, стоимость, дополнительная информация (рейтинг, скидка, вес, материал и т.п.)

Данные будем получать по сети. Лежать они будут в json файлах в директории `public/api`. Создадим несколько файлов вроде `category-products-3.json`.

Как может быть устроена схема REST API на бэкенде для серьезных магазинов можно посмотреть на примере [Magento WebAPI](https://developer.adobe.com/commerce/webapi/rest/quick-reference/).
