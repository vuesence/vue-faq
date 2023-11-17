export default [
  { text: "О приложении", link: "/vue-webapp/" },
  { text: "Установка", link: "/vue-webapp/getting-started" },  
  { text: "Цели", link: "/vue-webapp/objectives" },
  { text: "Принципы", link: "/vue-webapp/guidelines" }, 
  { text: "Участие в проекте", link: "/vue-webapp/contribution" }, 
  {
    text: "Опции",
    link: "/options/index",
    items: [
      { 
        text: "Макеты приложения", 
        collapsed: true,
        items: [
          { text: "MainLayout", link: "/vue-webapp/options/layout" },      
        ],
      },
      {
      text: "Части приложения",
      collapsed: true,
      items: [
        { text: "Footer", link: "/vue-webapp/options/footer" },
        { text: "Navigation drawer", link: "/vue-webapp/options/drawer" },      
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
  {
    text: "Шаблоны",
    collapsed: true,
    items: [
      { text: "Configuring the IDE", link: "/vue-webapp/development/ide" },
      { text: "Creating and building web application", link: "/vue-webapp/development/building" },      
    ],
  },
];
