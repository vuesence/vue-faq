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

# Изучение конкурентов

## Творческие способности

Если вы не сильно творчески одаренный человек, то создать сайт полностью самому вряд ли получится. Это примерно то же, что и написать хорошую картину.

Но в отличие от картины, дизайн сайта можно перенять. Как целиком, так и по частям - главный лэйаут, функционал, типы виджетов, их компоновка, цветовые гаммы, UI компоненты, шрифт, эффекты и многое другое. Может показаться воровством, но представим, что идете вы по улице, и видите дом. Красивый. Рассматриваете кровлю, структуру штукатурки, отделку фундамента. Потом приходите к себе, закупаете стройматериалы, заказываете строительную бригаду, и делаете себе примерно так же, но своё. Воровство?

## Сайты-аналоги

Давайте поизучаем конкурентов. Погуглим "best marketplace". Мне выпало:

- [alibris.com](https://www.alibris.com/)
- [etsy.com](https://www.etsy.com/)
- [walmart.com](https://www.walmart.com/)

Для начала отмечаем, что для фронтенда разница между маркетплейсом и магазином - минимальна. Как функционально, так и в дизайне страницы. В случае маркетплейса на странице товара есть маленькая ссылка на магазин, и есть фильтрация по магазинам, которую можно представлять, как отдельную категорию для каждого магазина. Правда отображение товаров в этой категории отличается от обычных категорий.

Делаем мы на первом этапе витрину, но в уме держим маркетплейс. Мы не должны принимать таких решений, которые бы в будущем заставили сильно рефакторить код. Но, очевидно, что мы можем ориентироваться в дизайне на простые магазины. Расширить потом до маркетплейса будет несложно.

Самый удобный магазин/маркетплейс, с моей точки зрения, [Ozon](https://ozon.ru), что подтверждается его успешностью. Его структуру мы и будем копировать.

::: tip Совет
Изучать похожие сайты полезно не только для вдохновения по дизайну, но и, например, при выборе наименования того или иного компонента - посмотрите через DevTools какие названия классов используются на аналогичном `html` блоке у конкурентов.
:::
