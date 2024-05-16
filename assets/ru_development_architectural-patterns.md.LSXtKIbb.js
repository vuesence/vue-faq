import{_ as s,o as a,c as n,a4 as i,a7 as p,a8 as l,a9 as e}from"./chunks/framework.B8KxSsRZ.js";import{_ as t}from"./chunks/modular-architecture.C9UloQkF.js";const v=JSON.parse('{"title":"Архитектурные решения","description":"","frontmatter":{},"headers":[],"relativePath":"ru/development/architectural-patterns.md","filePath":"ru/development/architectural-patterns.md","lastUpdated":1715855969000}'),h={name:"ru/development/architectural-patterns.md"},k=i(`<h1 id="архитектурные-решения" tabindex="-1">Архитектурные решения <a class="header-anchor" href="#архитектурные-решения" aria-label="Permalink to &quot;Архитектурные решения&quot;">​</a></h1><details class="details custom-block"><summary>Какие бывают структуры для Vue 3 проектов?</summary><h3 id="плоская" tabindex="-1">Плоская <a class="header-anchor" href="#плоская" aria-label="Permalink to &quot;Плоская&quot;">​</a></h3><p>При запуске небольшого проекта Vue, такого как Proof of Concept, вы можете предпочесть простую структуру папок, чтобы избежать сложностей:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/src</span></span>
<span class="line"><span>|-- /components</span></span>
<span class="line"><span>|   |-- BaseButton.vue</span></span>
<span class="line"><span>|   |-- BaseCard.vue</span></span>
<span class="line"><span>|   |-- PokemonList.vue</span></span>
<span class="line"><span>|   |-- PokemonCard.vue</span></span>
<span class="line"><span>|-- /composables</span></span>
<span class="line"><span>|   |-- usePokemon.js</span></span>
<span class="line"><span>|-- /utils</span></span>
<span class="line"><span>|   |-- validators.js</span></span>
<span class="line"><span>|-- /layout</span></span>
<span class="line"><span>|   |-- DefaultLayout.vue</span></span>
<span class="line"><span>|   |-- AdminLayout.vue</span></span>
<span class="line"><span>|-- /plugins</span></span>
<span class="line"><span>|   |-- translate.js</span></span>
<span class="line"><span>|-- /views</span></span>
<span class="line"><span>|   |-- Home.vue</span></span>
<span class="line"><span>|   |-- PokemonDetail.vue</span></span>
<span class="line"><span>|-- /router</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /store</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /assets</span></span>
<span class="line"><span>|   |-- /images</span></span>
<span class="line"><span>|   |-- /styles</span></span>
<span class="line"><span>|-- /tests</span></span>
<span class="line"><span>|   |-- ...</span></span>
<span class="line"><span>|-- App.vue</span></span>
<span class="line"><span>|-- main.js</span></span></code></pre></div><h3 id="атомарныи-дизаин" tabindex="-1">Атомарный дизайн <a class="header-anchor" href="#атомарныи-дизаин" aria-label="Permalink to &quot;Атомарный дизайн&quot;">​</a></h3><p>Для больших приложений Vue может оказаться полезным использование методологии Atomic Design. Этот подход организует компоненты в иерархию от самого простого к самому сложному:</p><ul><li>Атомы: Базовые элементы (например, кнопки, иконки).</li><li>Молекулы: Группы атомов (например, строки поиска).</li><li>Организмы: Сложные компоненты (например, панели навигации)</li><li>Шаблоны: Макеты, отображающие структуру компонентов</li><li>Страницы: Реальные экраны пользовательского интерфейса с реальными данными.</li></ul><p>Этот метод обеспечивает масштабируемость и поддерживаемость, облегчая плавный переход от простых к сложным компонентам.</p><p><img src="`+p+`" alt="image"></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/src</span></span>
<span class="line"><span>|-- /components</span></span>
<span class="line"><span>|   |-- /atoms</span></span>
<span class="line"><span>|   |   |-- AtomButton.vue</span></span>
<span class="line"><span>|   |   |-- AtomIcon.vue</span></span>
<span class="line"><span>|   |-- /molecules</span></span>
<span class="line"><span>|   |   |-- MoleculeSearchInput.vue</span></span>
<span class="line"><span>|   |   |-- MoleculePokemonThumbnail.vue</span></span>
<span class="line"><span>|   |-- /organisms</span></span>
<span class="line"><span>|   |   |-- OrganismPokemonCard.vue</span></span>
<span class="line"><span>|   |   |-- OrganismHeader.vue</span></span>
<span class="line"><span>|   |-- /templates</span></span>
<span class="line"><span>|   |   |-- TemplatePokemonList.vue</span></span>
<span class="line"><span>|   |   |-- TemplatePokemonDetail.vue</span></span>
<span class="line"><span>|-- /pages</span></span>
<span class="line"><span>|   |-- PageHome.vue</span></span>
<span class="line"><span>|   |-- PagePokemonDetail.vue</span></span>
<span class="line"><span>|-- /composables</span></span>
<span class="line"><span>|   |-- usePokemon.js</span></span>
<span class="line"><span>|-- /utils</span></span>
<span class="line"><span>|   |-- validators.js</span></span>
<span class="line"><span>|-- /layout</span></span>
<span class="line"><span>|   |-- LayoutDefault.vue</span></span>
<span class="line"><span>|   |-- LayoutAdmin.vue</span></span>
<span class="line"><span>|-- /plugins</span></span>
<span class="line"><span>|   |-- translate.js</span></span>
<span class="line"><span>|-- /router</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /store</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /assets</span></span>
<span class="line"><span>|   |-- /images</span></span>
<span class="line"><span>|   |-- /styles</span></span>
<span class="line"><span>|-- /tests</span></span>
<span class="line"><span>|   |-- ...</span></span>
<span class="line"><span>|-- App.vue</span></span>
<span class="line"><span>|-- main.js</span></span></code></pre></div><h3 id="модульныи-дизаин" tabindex="-1">Модульный дизайн <a class="header-anchor" href="#модульныи-дизаин" aria-label="Permalink to &quot;Модульный дизайн&quot;">​</a></h3><p>По мере масштабирования проекта рассмотрите возможность создания модульной архитектуры. Такая структура инкапсулирует каждую функцию или домен, повышая поддерживоемость и готовя к потенциальной эволюции в сторону микросервисов:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/src</span></span>
<span class="line"><span>|-- /core</span></span>
<span class="line"><span>|   |-- /components</span></span>
<span class="line"><span>|   |   |-- BaseButton.vue</span></span>
<span class="line"><span>|   |   |-- BaseIcon.vue</span></span>
<span class="line"><span>|   |-- /models</span></span>
<span class="line"><span>|   |-- /store</span></span>
<span class="line"><span>|   |-- /services</span></span>
<span class="line"><span>|   |-- /views</span></span>
<span class="line"><span>|   |   |-- DefaultLayout.vue</span></span>
<span class="line"><span>|   |   |-- AdminLayout.vue</span></span>
<span class="line"><span>|   |-- /utils</span></span>
<span class="line"><span>|   |   |-- validators.js</span></span>
<span class="line"><span>|-- /modules</span></span>
<span class="line"><span>|   |-- /pokemon</span></span>
<span class="line"><span>|   |   |-- /components</span></span>
<span class="line"><span>|   |   |   |-- PokemonThumbnail.vue</span></span>
<span class="line"><span>|   |   |   |-- PokemonCard.vue</span></span>
<span class="line"><span>|   |   |   |-- PokemonListTemplate.vue</span></span>
<span class="line"><span>|   |   |   |-- PokemonDetailTemplate.vue</span></span>
<span class="line"><span>|   |   |-- /models</span></span>
<span class="line"><span>|   |   |-- /store</span></span>
<span class="line"><span>|   |   |   |-- pokemonStore.js</span></span>
<span class="line"><span>|   |   |-- /services</span></span>
<span class="line"><span>|   |   |-- /views</span></span>
<span class="line"><span>|   |   |   |-- PokemonDetailPage.vue</span></span>
<span class="line"><span>|   |   |-- /tests</span></span>
<span class="line"><span>|   |   |   |-- pokemonTests.spec.js</span></span>
<span class="line"><span>|   |-- /search</span></span>
<span class="line"><span>|   |   |-- /components</span></span>
<span class="line"><span>|   |   |   |-- SearchInput.vue</span></span>
<span class="line"><span>|   |   |-- /models</span></span>
<span class="line"><span>|   |   |-- /store</span></span>
<span class="line"><span>|   |   |   |-- searchStore.js</span></span>
<span class="line"><span>|   |   |-- /services</span></span>
<span class="line"><span>|   |   |-- /views</span></span>
<span class="line"><span>|   |   |-- /tests</span></span>
<span class="line"><span>|   |   |   |-- searchTests.spec.js</span></span>
<span class="line"><span>|-- /assets</span></span>
<span class="line"><span>|   |-- /images</span></span>
<span class="line"><span>|   |-- /styles</span></span>
<span class="line"><span>|-- /scss</span></span>
<span class="line"><span>|-- App.vue</span></span>
<span class="line"><span>|-- main.ts</span></span>
<span class="line"><span>|-- router.ts</span></span>
<span class="line"><span>|-- store.ts</span></span>
<span class="line"><span>|-- /tests</span></span>
<span class="line"><span>|   |-- ...</span></span>
<span class="line"><span>|-- /plugins</span></span>
<span class="line"><span>|   |-- translate.js</span></span></code></pre></div><h3 id="feature-sliced-design" tabindex="-1">Feature Sliced Design <a class="header-anchor" href="#feature-sliced-design" aria-label="Permalink to &quot;Feature Sliced Design&quot;">​</a></h3><p>Feature-Sliced Design - это способ организации больших и долгосрочных проектов, чтобы ими было легче управлять и развивать. При таком подходе приложение разбивается на различные слои, каждый из которых играет определенную роль:</p><ul><li>App: Приложение: Глобальные настройки, стили и провайдеры.</li><li>Pages: Создание полноценных страниц с использованием сущностей, функций и виджетов.</li><li>Widgets: Объединяют сущности и функции в целостные блоки пользовательского интерфейса, например IssueList или UserProfile.</li><li>Functions: Обрабатывают пользовательские взаимодействия, которые добавляют ценность, такие как отправка комментариев, добавление в корзину или поиск пользователей.</li><li>Entities: Представляют основные бизнес-модели, такие как пользователь, продукт и заказ.</li><li>Shared: Предоставляет многократно используемые утилиты и компоненты, не связанные с конкретной бизнес-логикой, такие как UIKit, библиотеки и API.</li></ul><p><img src="`+l+`" alt="image"></p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/src</span></span>
<span class="line"><span>|-- /app</span></span>
<span class="line"><span>|   |-- App.vue</span></span>
<span class="line"><span>|   |-- main.js</span></span>
<span class="line"><span>|   |-- app.scss</span></span>
<span class="line"><span>|-- /processes</span></span>
<span class="line"><span>|-- /pages</span></span>
<span class="line"><span>|   |-- Home.vue</span></span>
<span class="line"><span>|   |-- PokemonDetailPage.vue</span></span>
<span class="line"><span>|-- /widgets</span></span>
<span class="line"><span>|   |-- UserProfile.vue</span></span>
<span class="line"><span>|   |-- PokemonStatsWidget.vue</span></span>
<span class="line"><span>|-- /features</span></span>
<span class="line"><span>|   |-- pokemon</span></span>
<span class="line"><span>|   |   |-- CatchPokemon.vue</span></span>
<span class="line"><span>|   |   |-- PokemonList.vue</span></span>
<span class="line"><span>|   |-- user</span></span>
<span class="line"><span>|   |   |-- Login.vue</span></span>
<span class="line"><span>|   |   |-- Register.vue</span></span>
<span class="line"><span>|-- /entities</span></span>
<span class="line"><span>|   |-- user</span></span>
<span class="line"><span>|   |   |-- userService.js</span></span>
<span class="line"><span>|   |   |-- userModel.js</span></span>
<span class="line"><span>|   |-- pokemon</span></span>
<span class="line"><span>|   |   |-- pokemonService.js</span></span>
<span class="line"><span>|   |   |-- pokemonModel.js</span></span>
<span class="line"><span>|-- /shared</span></span>
<span class="line"><span>|   |-- ui</span></span>
<span class="line"><span>|   |   |-- BaseButton.vue</span></span>
<span class="line"><span>|   |   |-- BaseInput.vue</span></span>
<span class="line"><span>|   |   |-- Loader.vue</span></span>
<span class="line"><span>|   |-- lib</span></span>
<span class="line"><span>|   |   |-- api.js</span></span>
<span class="line"><span>|   |   |-- helpers.js</span></span>
<span class="line"><span>|-- /assets</span></span>
<span class="line"><span>|   |-- /images</span></span>
<span class="line"><span>|   |-- /styles</span></span>
<span class="line"><span>|-- /router</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /store</span></span>
<span class="line"><span>|   |-- index.js</span></span>
<span class="line"><span>|-- /tests</span></span>
<span class="line"><span>|   |-- featureTests.spec.js</span></span></code></pre></div><h3 id="микрофронтенды" tabindex="-1">Микрофронтенды <a class="header-anchor" href="#микрофронтенды" aria-label="Permalink to &quot;Микрофронтенды&quot;">​</a></h3><p>Микрофронтенды берут за основу идею микросервисов и применяют ее к фронтенд-части веб-приложений. Это означает, что разные команды могут работать над разными разделами веб-приложения, не мешая друг другу. Каждый раздел, или «микрофронтенд», работает сам по себе и может изменяться независимо. Вот базовый обзор SPA. Обратите внимание, что в этой статье я не буду углубляться в детали того, как на самом деле работают микрофронтенды.</p><p>Оболочка приложения: Это основной контроллер, который управляет базовой версткой и маршрутизацией сайта. Он соединяет все микрофронтенды вместе. Декомпозированные пользовательские интерфейсы: Каждый микрофронтенд фокусируется на определенной части приложения. Они могут быть разработаны с использованием разных технологий и обновляться отдельно.</p><p><img src="`+e+'" alt="image"></p><p>Основное преимущество заключается в том, что микрофронтенды позволяют командам обновлять отдельные части приложения, не дожидаясь остальных, что ускоряет разработку. Однако такая настройка может сделать приложение более сложным в управлении и поддержании последовательности.</p><p>Полезные ресурсы: <a href="https://micro-frontends.org/" target="_blank" rel="noreferrer">Micro Frontends - Extending Microservice Ideas to Frontend Development</a><a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank" rel="noreferrer">Martin Fowler on Microfrontends</a></p><p>Эта стратегия идеально подходит для крупных, сложных проектов с несколькими командами разработчиков. Каждая команда может сосредоточиться на конкретных бизнес-требованиях, не влияя на работу других, и потенциально использовать технологии, которые лучше всего подходят для их части приложения.</p></details><details class="details custom-block"><summary>Сравнительная таблица</summary><table><thead><tr><th>Подход</th><th>Описание</th><th>Плюсы</th><th>Минусы</th></tr></thead><tbody><tr><td><strong>Плоский подход</strong></td><td>Простая структура, идеально подходящая для небольших проектов или проверки концепции.</td><td>- Простота реализации <br>- Минимальная настройка</td><td>- Не масштабируется <br>- Беспорядок по мере роста проекта</td></tr><tr><td><strong>Атомный дизайн</strong></td><td>Иерархическая структура, основанная на сложности компонентов.</td><td>- Масштабируемые <br>- Организованные <br>- Многоразовые компоненты</td><td>- Накладные расходы на управление слоями <br>- Сложная настройка</td></tr><tr><td><strong>Модули</strong></td><td>Модульная структура, инкапсулирующая функции.</td><td>- Масштабируемость <br>- Инкапсулированные функции</td><td>- Возможное дублирование <br>- Может стать сложным</td></tr><tr><td><strong>Многофункциональный дизайн</strong></td><td>Организует проект по функциональным слоям и фрагментам.</td><td>- Высокая сплоченность <br>- Четкое разделение функций</td><td>- Начальная сложность <br>- Требует тщательного планирования</td></tr><tr><td><strong>Микроинтерфейсы</strong></td><td>Каждая часть приложения развертывается отдельно.</td><td>- Независимые развертывания <br>- Масштабируемость</td><td>- Высокая сложность <br>- Необходима координация между командами</td></tr></tbody></table></details><details class="details custom-block"><summary>Подходящая структура для Vue 3 проекта</summary><p>Самая удобная архитектура для Vue 3 приложения - модульная.</p><p>Изначально, приложение разбивается на логические модули, слабо связанные друг с другом. Например, для онлайн магазина это могут быть модуль каталога товаров, модуль отдельного товара, модуль личного кабинета / аккаунта пользователя.</p><p>Кроме того, есть модуль оболочки - то, что иногда называет <code>app shell</code>. Шаблон с хедером, футером, боковым меню и главным окном. В этот модуль целесообразно поместить утилиты и ресурсы, используемые по всему приложению - например, <code>api</code>, <code>useI18n</code>, <code>BaseButton</code> и <code>stringHelpers</code>.</p><p>В каждом модуле свои <code>components</code>, <code>composables</code>, <code>assets</code>, <code>utils</code>; возможно, <code>api</code>, <code>routes</code>, <code>views</code>, <code>layouts</code>.</p><p>Слабая связанность позволяет разрабатывать каждый модуль достаточно независимо, что значительно повышает вероятность успешности проекта.</p><p><img src="'+t+`" alt="image"></p></details><details class="details custom-block"><summary>Как переиспользовать одни те же разрабатываемые ресурсы на нескольких проектах?</summary><p>Иногда есть два или более проекта (админ панель и сайт, например) которые должны использовать одни и те же компоненты, утилиты, сервисы, композабл функции и прочие ресурсы, которые сами в свою очередь находятся в процессе разработки.</p><p>Самое удобное в данном случае, выделить все ресурсы в отдельный проект/репозиторий, и использовать Git submodules для подключения его как поддиректории в каждом проекте. VS Code позволяет прозрачно и комфортно работать одновременно и с проектом, и с подключенными сабмодулями.</p><p>Если нужна версионность и независимость библиотеки ресурсов, можно оформить её как private NPM пакет.</p></details><details class="details custom-block"><summary>Когда использовать Provide/Inject?</summary><h3 id="use-cases" tabindex="-1">Use cases <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Use cases&quot;">​</a></h3><ul><li><p>Настройки темы или конфигурации: Вы можете предоставить глобальные настройки, темы или параметры конфигурации на корневом уровне вашего приложения Vue.js и внедрить их в любой компонент, которому они нужны.</p></li><li><p>Данные аутентификации: Предоставляйте информацию об аутентификации пользователя, например данные пользователя или токены аутентификации, компонентам, которым они необходимы, не передавая их через пропсы.</p></li><li><p>Интернационализация (i18n): Храните данные перевода на корневом уровне и внедряйте их в компоненты, которым требуется отображать текст на разных языках.</p></li><li><p>Тесно связанные компоненты: Например, компонент AccordianPanel, который всегда появляется только внутри слота компонента Accordian. Вы можете инжектировать общие данные, к которым вы всегда хотите иметь доступ, без необходимости передавать их в качестве пропсов.</p></li></ul><h3 id="лучшие-практики-и-соображения" tabindex="-1">Лучшие практики и соображения <a class="header-anchor" href="#лучшие-практики-и-соображения" aria-label="Permalink to &quot;Лучшие практики и соображения&quot;">​</a></h3><p>При использовании provide и inject необходимо помнить о нескольких лучших практиках:</p><ul><li><p>Избегайте чрезмерного использования: Хотя provide и inject могут быть очень мощными, не стоит ими злоупотреблять. Оставьте их для случаев, когда вам действительно нужно поделиться данными между компонентами, не создавая тесной связи между ними.</p></li><li><p>Четкая документация: Документируйте данные, которые вы провайдите и инжектируете, чтобы разработчикам было легко понять, как взаимодействуют компоненты. Их также можно типизировать, - подробности в <a href="https://vuejs.org/guide/typescript/composition-api.html#typing-provide-inject" target="_blank" rel="noreferrer">официальной документации</a>.</p></li><li><p>Рассмотрите возможность Prop Drilling: Prop drilling обычно является антипаттерном, но в некоторых случаях передача данных через пропсы может быть более простым и прозрачным подходом. Оцените, являются ли provide и inject лучшим решением для вашего конкретного сценария.</p></li></ul></details><details class="details custom-block"><summary>Как лучше организовать работу с лэйаутами (макетами)?</summary><p>У приложения может быть несколько лэйаутов - один с боковым меню, например, и другой - без. Какие-то страницы показываются с боковым меню, другие - без.</p><p>Удобно это регулировать роутами. Делается два вложенных <code>router-view</code> - внешний отвечает за лэйаут, а внутренний (их может быть несколько) - за компоненты в этом лэйауте.</p><p>Пример:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// MainLayout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AppFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// SidebarLayout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AppHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AppSidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">AppFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// App.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><code>routes = generalRoutes U accountRoutes</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> generalRoutes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: MainLayout,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/maintenance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;maintenance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      component: MaintenanceView,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> accountRoutes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: SidebarLayout,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      path: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;account&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      component: UserAccountView,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      meta: { requiresAuth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, backRoute: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div></details><details class="details custom-block"><summary>Как сделать один глобальный прелоадер (аналог Suspense)?</summary><p>Если в приложении одновременно может выполняться несколько асинхронных функций (загрузка с бэкенда, например), а анимационный прелоадер надо показывать один, то можно несложно реализовать его через composable функцию:</p><h5 id="apploader-vue" tabindex="-1">AppLoader.vue <a class="header-anchor" href="#apploader-vue" aria-label="Permalink to &quot;AppLoader.vue&quot;">​</a></h5><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useAppLoader } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/app/composables/useAppLoader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useAppLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: loading }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;loaderBar&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h5 id="useapploader-ts" tabindex="-1">useAppLoader.ts <a class="header-anchor" href="#useapploader-ts" aria-label="Permalink to &quot;useAppLoader.ts&quot;">​</a></h5><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { computed, reactive, ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { uuid } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/app/utils/uuid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loaderSet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;());</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loaderSet.size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useAppLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _uuid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uuid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> startLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loaderSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_uuid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stopLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    loaderSet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_uuid);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { loading, startLoading, stopLoading };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h5 id="somecomponent" tabindex="-1">SomeComponent <a class="header-anchor" href="#somecomponent" aria-label="Permalink to &quot;SomeComponent&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useAppLoader } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/app/composables/useAppLoader&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">startLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stopLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useAppLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">product.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.products.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">product</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props.productId);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><code>uuid</code> - любая функция для генерации уникального id.</p></details>`,8),r=[k];function d(E,c,o,g,u,y){return a(),n("div",null,r)}const A=s(h,[["render",d]]);export{v as __pageData,A as default};
