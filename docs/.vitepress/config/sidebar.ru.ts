export default [
  { text: "Предисловие", link: "/misc/introduction" },
  {
    text: "Фронтенд",
    items: [
      { text: "О фронтенд фреймворках", link: "/frontend/about-frameworks" },
      { text: "Как изучать Vue?", link: "/frontend/learning" },
      { text: "SPA, PWA, SSG, SSR и CEO", link: "/frontend/spa-pwa-ssr-ssg" },
      { text: "CSS и UI библиотеки", link: "/frontend/css-ui-libs" },
      { text: "Архитектура фронтенд приложений", link: "/frontend/architecture" },
    ],
  },
  {
    text: "Разработка",
    items: [
      { text: "Настройка IDE", link: "/development/ide" },
      { text: "Создание и сборка приложения", link: "/development/building" },
      // { text: "Создание проекта", link: "/development/new-project" },
      { text: "Как вставлять картинки и другие ресурсы", link: "/development/assets" },
      { text: "Сторы - Vuex, Pinia и Composition API", link: "/development/stores" },
      { text: "Тестирование", link: "/development/testing" },
      { text: "Полезные советы", link: "/development/misc" },
    ],
  },
  {
    text: "Общение с бэкендом",
    items: [
      { text: "Авторизация и аутентификация", link: "/backend/auth" },
      { text: "Протоколы. To REST или не REST?", link: "/backend/protocols" },
      { text: "Выделение API сервиса", link: "/backend/api" },
      { text: "Варианты сделать бэкенд", link: "/backend/backend" },
      { text: "CORS", link: "/backend/cors" },
    ],
  },
  {
    text: "Деплой на сервере",
    items: [
      { text: "CI/CD", link: "/deployment/ci-cd" },
      { text: "Варианты размещения сайта", link: "/deployment/hosting" },
      // { text: "Docker", link: "/deployment/docker" },
    ],
  },
  { text: "Шпаргалки", link: "/misc/cheat-sheets" },
  { text: "Глоссарий", link: "/misc/glossary" },
  { text: "Дополнить этот FAQ", link: "/misc/contribute" },
];
