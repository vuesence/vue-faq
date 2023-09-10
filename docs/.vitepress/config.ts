import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue FAQ",
  description: "Vue JavaScript фреймворк FAQ",
  head: [
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JL65GWRNZZ');`,
    ],
  ],
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      { text: "Предисловие", link: "/introduction" },
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
          { text: "Какой IDE выбрать?", link: "/development/ide" },
          { text: "Создание и сборка приложения", link: "/development/building" },
          // { text: "Создание проекта", link: "/development/new-project" },
          { text: "Как вставлять картинки и другие ресурсы?", link: "/development/assets" },
          { text: "Pinia, Vuex и все-все-все", link: "/development/stores" },
          { text: "Тестирование", link: "/development/testing" },
          { text: "Разное", link: "/development/misc" },
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
          { text: "Docker", link: "/deployment/docker" },
        ],
      },
      { text: "Шпаргалки", link: "/misc/cheat-sheets" },
      { text: "Глоссарий", link: "/misc/glossary" },
      { text: "Дополнить этот FAQ", link: "/about/add-qa" },
      // {
      //   text: "Добавить вопрос к FAQ",
      //   items: [
      //     { text: "О данном сайте", link: "/about/website" },
      //   ],
      // },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuesence/vue-faq" }],
  },
});
