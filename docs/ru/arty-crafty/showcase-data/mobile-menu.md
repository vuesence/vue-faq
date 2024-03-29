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

# Мобильное меню, CSS

## IconButton

В мобильном виде обычно на подобных сайтах есть нижнее меню. Кнопки с иконками тут сильно похожи на те, что используются в главном хедере, значит пора выделить их в отдельный компонент `BaseIconButton`. При создании базовых UI компонент есть искушение сделать его как можно универсальней, со множеством опций, но лучше делать самое необходимое с возможностью расширения позже. В нашем случае добавим только badge.

![image](/ru/arty-crafty/assets/images/mobile-menu.webp)

Заменяем в `AppHeader` кнопки на `BaseIconButton`.

## SCSS => CSS

От SCSS мы используем только nesting (вкладывание селекторов друг в друга). Эта удобная фунциональность уже часть современного CSS, поддерживается последними версиями всех браузеров, но общая поддержка около 90%. Через полгода-год уже должна быть достаточная поддержка браузерами, чтобы мы использовали чистый CSS.

Перейдем на него уже сейчас, и будем использовать `postcss-nesting` пакет для преобразования CSS с nesting в простой CSS. Это позволит в будущем просто убрать этот пакет из проекта, не меняя код. В противном случае при переходе надо будет немного править каждый блок SCSS в каждом SFC.

Итак, убираем из зависимостей пакет `sass`, добавляем `postcss-nesting`, в каждом SFC файле убираем `lang="scss"`, и заменяем двуслешные `// ...` комментарии SCSS на `/* ... */` комментарии CSS. Всё работает.

Есть небольшая терпимая проблема с подсветкой CSS с nesting в VS Code, но есть и "плюс" - теперь по селектору из блока стилей можно по SHIFT+F12 попасть в нужное место в шаблоне. С SCSS это было нельзя.

## Tag и CMV

Загружаем в репозиторий и ставим тэг - [`v0.4`](https://github.com/vuesence/arty-crafty/tree/v0.4)

[Coding music video](https://youtu.be/Z1o7BgNuHDg)
