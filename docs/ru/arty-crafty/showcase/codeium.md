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

# Codeium

## Автокомплит

Codeium - это AI помощник, аналогичный Copilot, его бесплатная альтернатива. У него есть расширение для VS Code и других IDE.

В прошлой главе `useFavourites` был на 80% написан им с помощью автокомплита. Ты начинаешь писать название функции, он генерит её тело на основании контекста, ты клавишей `Tab` принимаешь его решение, либо выбираешь другое из предложенных с помощью комбинаций клавиш `Alt + ]` и `Alt + [` (`⌥ + ]` и `⌥ + [` ):

![image](/ru/arty-crafty/assets/images/codeium-1.jpg)

Для подобных довольно простых по логике модулей и компонент Codeium генерит код достаточно точно. Удобно пользоваться.

Чтобы поточнее подсказать Codeium, что тебе надо, можно сперва написать комментарий о функции, которую надо сгенерить, и затем на следующей строке использовать автокомплит.

## Чат-бот

Чат-бот для промптов есть в отдельной Codeium панели

## Explain, Refactor, JSDoc

Над каждой функцией Codeium позволяет совершать определенные действия:

![image](/ru/arty-crafty/assets/images/codeium-2.jpg)

Например, `Refactor -> Make this code strongly typed` с небольшими правками дает следующее на `listFavourites()`:

```js
/**
 * Returns a list of favorite products.
 *
 * @returns {Array<number>} - The list of favorite product IDs.
 */
function listFavourites(): Array<number> {
  return Array.from(favourites.value);
}
```

Добавились типы и сгенерился JSDoc, который можно получить используя только команду `Generate JSDoc`.

Теперь если в месте использования функции мы наведем курсор на неё, получим полное описание:

![image](/ru/arty-crafty/assets/images/codeium-3.jpg)

`Explain` даёт текстовое объяснение функции:

> This code defines a function called listFavourites that returns a list of favorite product IDs. The function uses the Array.from method to convert the favourites.value array-like object into a proper array. The function has a return type annotation of Array\<number\>, indicating that it returns an array of numbers.

## Вывод

Codeium - не панацея, если не умеешь программировать, но экономит много времени, если что-то умеешь.
