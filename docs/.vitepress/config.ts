import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue FAQ",
  description: "Vue JavaScript фреймворк FAQ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная", link: "/" },
      // { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      { text: "Предисловие", link: "/introduction" },
      {
        text: "Front-end",
        items: [
          { text: "О фронтенд фреймворках", link: "/frontend/about-frameworks" },
          { text: "Как изучать?", link: "/frontend/learning" },
          { text: "SPA, PWA, SSG и SSR", link: "/frontend/spa-pwa-ssr-ssg" },
          { text: "Какой IDE выбрать?", link: "/frontend/ide" },
          { text: "CSS и UI библиотеки", link: "/frontend/css-ui-libs" },
          { text: "Архитектура фронтенд приложений", link: "/frontend/architecture" },
        ],
      },
      {
        text: "Разработка",
        items: [
          { text: "Сборка приложения. Vite", link: "/development/about-vite" },
          { text: "Как вставлять картинки и другие ресурсы?", link: "/development/assets" },
          { text: "Pinia, Vuex и все-все-все", link: "/development/state-management" },
          { text: "Тестирование", link: "/development/testing" },
        ],
      },
      {
        text: "Общение с бэкендом",
        items: [
          { text: "Авторизация и аутентификация", link: "/backend/auth" },
          { text: "Протоколы. To REST или не REST?", link: "/backend/protocols" },
          { text: "CORS", link: "/backend/cors" },
        ],
      },
      {
        text: "Деплой на сервере",
        items: [
          { text: "О Vite", link: "/deployment/about-vite" },
          { text: "Docker", link: "/deployment/docker" },
        ],
      },
      { text: "Шпаргалки", link: "/misc/cheat-sheets" },
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
