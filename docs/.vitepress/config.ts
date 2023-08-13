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
      {
        text: "Front-end разработка",
        items: [
          { text: "О Vue.js фреймворке", link: "/vue/about-framework" },
          { text: "Как изучать?", link: "/vue/learning" },
          { text: "SPA, PWA, SSG и SSR", link: "/spa-pwa-ssr-ssg" },
          { text: "Какой IDE взять?", link: "/ide" },
          { text: "CSS и UI библиотеки", link: "/css-ui-libs" },
        ],
      },
      {
        text: "Сборка",
        items: [
          { text: "О Vite", link: "/builder/about-vite" },
          { text: "Как вставлять картинки и другие ресурсы?", link: "/builder/assets" },
        ],
      },
      {
        text: "Общение с бэкендом",
        items: [
          { text: "CORS", link: "/backend/cors" },
          { text: "Протоколы", link: "/backend/protocols" },
        ],
      },
      {
        text: "Деплой на сервере",
        items: [
          { text: "О Vite", link: "/builder/about-vite" },
          { text: "Docker", link: "/builder/docker" },
        ],
      },
      { text: "Дополнить этот FAQ", link: "/about/add-qa" },
      // {
      //   text: "Добавить вопрос к FAQ",
      //   items: [
      //     { text: "О данном сайте", link: "/about/website" },
      //   ],
      // },
    ],

    socialLinks: [{ icon: "github", link: "" }],
  },
});
