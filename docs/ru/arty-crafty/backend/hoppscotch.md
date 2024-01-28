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

# Hoppscotch

## Работа с API

Для работы и тестирования API обычно используется инструмент типа `Postman`, умеющий делать REST запросы и всё остальное, с ним связанное. Однако, как это часто бывает с монополистом, `Postman` сильно отяжелел за последние годы и работать с ним не очень комфортно.

Одной из удобных альтернатив является `Hopscotch`, в девичестве - `Postwoman`. Он работает из браузера или как PWA приложение, имеет весь необходимый нам функционал и написан на Vue.

![image](/ru/arty-crafty/assets/images/hoppscotch.webp)

## Endpoints

Нам нужны три эндпойнта на текущем этапе:

- список всех категорий
- список товаров в определенной категории
- подробная информация о товаре

Создадим соответствующие запросы в Hoppscotch:

```sh
curl --request GET \
  --url 'https://client_id.supabase.co/rest/v1/categories?select=*' \
  --header 'Authorization: Bearer $apiKey$' \
  --header 'apikey: $apiKey$'

curl --request GET \
  --url 'https://client_id.supabase.co/rest/v1/categories?select=id,title,product(id,title,desc)&id=eq.2' \
  --header 'Authorization: Bearer $apiKey$' \
  --header 'apikey: $apiKey$'

curl --request GET \
  --url 'https://client_id.supabase.co/rest/v1/products?select=id,title,desc,data&id=eq.2' \
  --header 'Authorization: Bearer $apiKey$' \
  --header 'apikey: $apiKey$'
```

Второй запрос - это `LEFT JOIN` на таблицах `categories` и `products`. К сожалению документация Supabase не очень детально описывает join-ы, пришлось поэкспериментировать.
