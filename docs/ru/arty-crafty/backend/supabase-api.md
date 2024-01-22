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

# Supabase REST API

## Supabase SDK

Supabase автоматически генерит эндпойнты для доступа к нашим таблицам. Обращаться к ним можно либо через Supabase SDK.

#### Установка:
```sh
 pnpm add @supabase/supabase-js
```

#### Использование:
```js
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient("https://client_id.supabase.co", "public-anon-key");

const { data: product, error } = await supabase
  .from("product")
  .select("*");

const { data, error } = await supabase
  .from("product")
  .insert([
    { some_column: "someValue", other_column: "otherValue" },
  ])
  .select();

const { error } = await supabase
  .from("product")
  .delete()
  .eq("some_column", "someValue");
```

## Supabase REST API

Либо напрямую через HTTP запросы:

```sh
curl 'https://client_id.supabase.co/rest/v1/product?select=*' \
-H "apikey: SUPABASE_CLIENT_ANON_KEY" \
-H "Authorization: Bearer SUPABASE_CLIENT_ANON_KEY"

curl -X POST 'https://client_id.supabase.co/rest/v1/product' \
-H "apikey: SUPABASE_CLIENT_ANON_KEY" \
-H "Authorization: Bearer SUPABASE_CLIENT_ANON_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'

curl -X DELETE 'https://client_id.supabase.co/rest/v1/product?some_column=eq.someValue' \
-H "apikey: SUPABASE_CLIENT_ANON_KEY" \
-H "Authorization: Bearer SUPABASE_CLIENT_ANON_KEY"
```

Мы будем использовать второй способ, - опять же, чтобы не внедрять необязательные зависимости. Плюс, дебажить явные HTTP запросы намного проще.
