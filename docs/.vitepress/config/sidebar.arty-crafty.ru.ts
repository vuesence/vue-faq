export default [
  { text: "Предисловие", link: "/ru/arty-crafty/index" },
  { text: "О проекте", link: "/ru/arty-crafty/about-project" },
  { text: "План работы", link: "/ru/arty-crafty/development-stages" },
  {
    text: "Подготовка",
    items: [
      {
        text: "Анализ",
        collapsed: false,
        items: [
          { text: "Бизнес анализ", link: "/ru/arty-crafty/analysis/business-analysis" },
          { text: "Архитектура приложения", link: "/ru/arty-crafty/analysis/architecture-and-design" },
          { text: "Модель данных", link: "/ru/arty-crafty/analysis/data-model" },
          { text: "Технический стэк", link: "/ru/arty-crafty/analysis/tech-stack" },
          { text: "Анализ рынка", link: "/ru/arty-crafty/analysis/research" },
          { text: "UI макет", link: "/ru/arty-crafty/analysis/ui-layout" },
          { text: "UI дизайн", link: "/ru/arty-crafty/analysis/ui-design" },
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
        ],
      },
    ],
  },
];
