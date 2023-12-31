# Варианты задействовать свой бэкенд для фронтендера

::: details Как протестировать фронт на данных с бэка?

Есть много сервисов, предлагающих свой API с различными данными для тестирования либо полноценной работы

Например, [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

Гуглить по `"json placeholder"`

:::

::: details Есть ли бесплатные открытые API с реальными данными?

Полно. Например, [тут](https://github.com/public-apis/public-apis)

Гуглить по `"public api"`

Также можно похакать релевантные сайты в DevTools / Network на предмет эндпойнтов с данными в подходящем формате

:::

::: details Как сделать свой бэкенд?

Если уже знаете JavaScript, поставить и запустить Node.js с HTTP сервером проблем вызвать не должно.

Node.js далеко не очень популярный сервер для интернета, но для небольшого проекта пойдет.

В абсолютном значении проще всего установить и начать работать с Nginx и PHP

Большинство крупных облачных провайдеров (Amazon, Google, Oracle, Microsoft) предоставляет бесплатные планы с возможностью запустить виртуальный сервер. Поставив туда что требуется, можно захостить и бэк, и бандл фронта.

:::

::: details Что такое BaaS (Backend as a service)?

Это облачное решение, когда бэкенд в виде базы данных и интерфейса доступа к ней, а возможно и возможность использовать некоторую логику, предоставляет BaaS провайдер.

Например, NoSQL базу данных и доступ к ней предоставляет Google с помощью своего сервиcа Firebase

Альтернатива с PostgreSQL - Supabase

То есть, ваш фронтэнд будет обращаться к их определенным эндпойнтам и получать нужные сервисы - например, сохранять и запрашивать данные в базе данных.

Оба сервиса предоставляют возможность сделать аутентификацию на сайте. Таким образом, фронтэндер может написать приложение используя подобный сервис без написания своего бэкенд кода и без размещения его где-то на сервере в интернете.

У данных сервисов есть бесплатные планы с довольно большими ресурсами.

:::

::: details Бизнес логика на BaaS

Большинство BaaS сервисов предоставляет не только CRUD доступ к своей базе данных, но и возможность написать кастомную логику в виде Cloud Functions у Firebase, Edge Functions у Supabase, AWS Lambda у Amazon и т.д.

Данные функции являются кодом на каком-то языке программирования, который будет вызываться при обращении к определенному эндпойнту бэкенда.

В случае, если фронтенд разработчик хочет сделать полноценное приложение, но заморачиваться на самостоятельный бэкенд не хочет, это является довольно неплохим и очень экономичным решением.

:::

::: details Как работают Edge/Cloud/Lamda функции

По сути, это бэкенд в миниатюре

Твой фронт обращаешься к заданному эндпойнту (через API gateway сервиса BaaS провайдера) - например, `/api/somefunc`

Там лежит написанный тобой скрипт на js или другом языке программирования который выполняется, имеет доступ к базе данных и может делать другие вещи (грузить данные из инета например)

Затем скрипт формирует результат и возвращает его твоему фронту

:::
