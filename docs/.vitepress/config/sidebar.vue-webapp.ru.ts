export default [
  { text: "О приложении", link: "/vue-webapp/" },
  { text: "Установка", link: "/vue-webapp/getting-started" },  
  { text: "Цели", link: "/vue-webapp/objectives" },
  { text: "Принципы", link: "/vue-webapp/guidelines" }, 
  { text: "Участие в проекте", link: "/vue-webapp/contribution" }, 
  {
    text: "Опции",
    link: "/vue-webapp/options/index",
    items: [
      { 
        text: "Макеты приложения", 
        collapsed: true,
        items: [
          { text: "MainLayout", link: "/vue-webapp/options/layout" },      
        ],
      },
      {
      text: "Компоненты приложения",
      collapsed: true,
      items: [
        { text: "Header", link: "/vue-webapp/options/header" },
        { text: "Footer", link: "/vue-webapp/options/footer" },
        { text: "Navigation drawer", link: "/vue-webapp/options/drawer" },      
        { text: "BaseIcon", link: "/vue-webapp/options/baseIcon" },      
      ],
      },
      {
      text: "Функциональность",
      collapsed: true,
      items: [
        { text: "API модуль", link: "/vue-webapp/options/api" },
        { text: "i18n", link: "/vue-webapp/options/i18n" },      
      ],
      },
  ]
  },
];
