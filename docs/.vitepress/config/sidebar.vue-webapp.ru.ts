export default [
  { text: "О приложении", link: "/ru/vue-webapp/" },
  { text: "Установка", link: "/ru/vue-webapp/getting-started" },  
  { text: "Цели", link: "/ru/vue-webapp/objectives" },
  { text: "Принципы", link: "/ru/vue-webapp/guidelines" }, 
  { text: "Участие в проекте", link: "/ru/vue-webapp/contribution" }, 
  {
    text: "Опции",
    link: "/ru/vue-webapp/options/index",
    items: [
      { 
        text: "Макеты приложения", 
        collapsed: false,
        items: [
          { text: "MainLayout", link: "/ru/vue-webapp/options/layout-main" },      
          { text: "OneColumnLayout", link: "/ru/vue-webapp/options/layout-one-column" },      
        ],
      },
      {
      text: "Компоненты приложения",
      collapsed: false,
      items: [
        { text: "Header", link: "/ru/vue-webapp/options/header" },
        { text: "Footer", link: "/ru/vue-webapp/options/footer" },
        { text: "Navigation drawer", link: "/ru/vue-webapp/options/drawer" },      
        { text: "Navbar", link: "/ru/vue-webapp/options/navbar" },
        { text: "BaseIcon", link: "/ru/vue-webapp/options/baseIcon" },      
      ],
      },
      {
      text: "Функциональность",
      collapsed: false,
      items: [
        { text: "Описание", link: "/ru/vue-webapp/options/description" },
        { text: "Адаптивность", link: "/ru/vue-webapp/options/adaptability" },
        { text: "Themes", link: "/ru/vue-webapp/options/themes" },
        { text: "Splash screen", link: "/ru/vue-webapp/options/splash-screen" },      
        { text: "Google analytics", link: "/ru/vue-webapp/options/google-analytics" },      
        { text: "Open graph", link: "/ru/vue-webapp/options/open-graph" },      
        { text: "API модуль", link: "/ru/vue-webapp/options/api" },
        { text: "PWA", link: "/ru/vue-webapp/options/pwa" },
        { text: "Github Pages deploy", link: "/ru/vue-webapp/options/ga-gp" },      
        // { text: "i18n", link: "/ru/vue-webapp/options/i18n" },      
      ],
      },
  ]
  },
];
