export default [
  { text: "О проекте", link: "/ru/arty-crafty/index" },
  {
    text: "Предисловие",
    items: [
      { text: "Цели и задачи", link: "/ru/arty-crafty/introduction/goals" },
      { text: "План работы", link: "/ru/arty-crafty/introduction/development-stages" },
      { text: "Репозиторий и сайт", link: "/ru/arty-crafty/introduction/repository" },
    ],
  },
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
      {
        text: "Бэкенд и база данных",
        collapsed: false,
        items: [
          { text: "Выбор BaaS", link: "/ru/arty-crafty/backend/baas-choosing" },
          { text: "Supabase", link: "/ru/arty-crafty/backend/supabase" },
          { text: "Модель данных", link: "/ru/arty-crafty/backend/db-data-model" },
          { text: "Supabase API", link: "/ru/arty-crafty/backend/supabase-api" },
          { text: "Hoppscotch", link: "/ru/arty-crafty/backend/hoppscotch" },
        ],
      },
      {
        text: "Витрина -  данные",
        collapsed: false,
        items: [
          { text: "API сервис адаптер", link: "/ru/arty-crafty/showcase-data/api-service-adapter" },
          { text: "Мобильное меню, CSS", link: "/ru/arty-crafty/showcase-data/mobile-menu" },
          { text: "VueUse", link: "/ru/arty-crafty/showcase-data/vueuse" },
          // { text: "Слайдер, ProductView", link: "/ru/arty-crafty/showcase-data/product-page" },
        ],
      },
    ],
  },
];
