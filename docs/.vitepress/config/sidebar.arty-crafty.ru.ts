export default [
  { text: "Предисловие", link: "/ru/arty-crafty/index" },
  { text: "О проекте", link: "/ru/arty-crafty/about-project" },
  { text: "План работы", link: "/ru/arty-crafty/development-stages" },
  {
    text: "Анализ",
    items: [
      {
        text: "Функционал",
        collapsed: false,
        items: [
          { text: "Бизнес анализ", link: "/ru/arty-crafty/analysis/business-analysis" },
          { text: "Архитектура приложения", link: "/ru/arty-crafty/analysis/architecture-and-design" },
          { text: "Модель данных", link: "/ru/arty-crafty/analysis/data-model" },
          { text: "Технический стек", link: "/ru/arty-crafty/analysis/tech-stack" },
        ],
      },
      {
        text: "UI/UX",
        collapsed: false,
        items: [
          { text: "Анализ рынка", link: "/ru/arty-crafty/analysis/research" },
          { text: "Макет", link: "/ru/arty-crafty/analysis/ui-layout" },
          { text: "Дизайн", link: "/ru/arty-crafty/analysis/ui-design" },
        ],
      },
    ],
  },
  {
    text: "Разработка",
    items: [
      {
        text: "Витрина",
        collapsed: false,
        items: [
          { text: "Создание проекта", link: "/ru/arty-crafty/showcase/project-setup" },
          { text: "Кастомизация", link: "/ru/arty-crafty/showcase/customization" },
          // { text: "Категория товаров", link: "/ru/arty-crafty/showcase/product-category" },
        ],
      },
    ],
  },
];
