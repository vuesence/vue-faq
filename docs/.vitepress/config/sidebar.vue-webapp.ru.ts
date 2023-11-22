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
        collapsed: true,
        items: [
          { text: "MainLayout", link: "/ru/vue-webapp/options/layout" },      
        ],
      },
      {
      text: "Компоненты приложения",
      collapsed: true,
      items: [
        { text: "Header", link: "/ru/vue-webapp/options/header" },
        { text: "Footer", link: "/ru/vue-webapp/options/footer" },
        { text: "Navigation drawer", link: "/ru/vue-webapp/options/drawer" },      
        { text: "BaseIcon", link: "/ru/vue-webapp/options/baseIcon" },      
      ],
      },
      {
      text: "Функциональность",
      collapsed: true,
      items: [
        { text: "API модуль", link: "/ru/vue-webapp/options/api" },
        { text: "i18n", link: "/ru/vue-webapp/options/i18n" },      
        { text: "Github Pages deploy", link: "/ru/vue-webapp/options/ga-gp" },      
      ],
      },
  ]
  },
];
