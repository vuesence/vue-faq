export default [
  { text: "Предисловие", link: "/ru/arty-crafty/index" },
  { text: "О проекте", link: "/ru/arty-crafty/about-project" },
  { text: "План работы", link: "/ru/arty-crafty/development-stages" },
  { text: "Репозиторий", link: "/ru/arty-crafty/repository" },
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
          { text: "Категория товаров", link: "/ru/arty-crafty/showcase/product-category" },
          { text: "'Избранное'", link: "/ru/arty-crafty/showcase/favourites" },
          { text: "Codeium", link: "/ru/arty-crafty/showcase/codeium" },
        ],
      },
      // {
      //   text: "Бэкенд и база данных",
      //   collapsed: false,
      //   items: [
      //     { text: "Выбор CMS", link: "/ru/arty-crafty/database/cms-choosing" },
      //     { text: "Supabase", link: "/ru/arty-crafty/database/supabase" },
      //     { text: "Модель данных", link: "/ru/arty-crafty/database/data-model" },
      //     { text: "Hoppscotch", link: "/ru/arty-crafty/database/hoppscotch" },
      //     { text: "API", link: "/ru/arty-crafty/database/api" },
      //   ],
      // },
    ],
  },
];
