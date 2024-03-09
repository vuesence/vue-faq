# Web components

## Custom elements

Созданный вам Vue компонент можно оформить:

- как отдельное приложение
- как библиотеку для подключения во Vue проектах
- как web component для подключения в любой JavaScript фронтенд приложении или просто веб-странице

Зачем нужен третий вариант? Чтобы людям, не знакомым с Vue можно было легко подключать ваш компонент у себя примерно в такой форме:

```html
<release-timeline title="Hola"></release-timeline>
```

Web component Custom element может принимать строковый пропсы и испускать `CustomEvent` события.

Web components v Custom elements это давно стандарт HTML5 и поддерживается всеми основными браузерами.
