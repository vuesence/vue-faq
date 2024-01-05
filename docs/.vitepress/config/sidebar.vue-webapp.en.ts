export default [
  { text: "About", link: "/en/vue-webapp/" },
  { text: "Getting started", link: "/en/vue-webapp/getting-started" },
  { text: "Objectives", link: "/en/vue-webapp/objectives" },
  { text: "Guidelines", link: "/en/vue-webapp/guidelines " },
  { text: "Contribution", link: "/en/vue-webapp/contribution" },
  {
    text: "Options",
    link: "/en/vue-webapp/options/index",
    items: [
      {
        text: "App layouts",
        collapsed: false,
        items: [
          { text: "MainLayout", link: "/en/vue-webapp/options/layout-main" },
          { text: "OneColumnLayout", link: "/en/vue-webapp/options/layout-one-column" },
        ],
      },
      {
        text: "App components",
        collapsed: false,
        items: [
          { text: "Header", link: "/en/vue-webapp/options/header" },
          { text: "Footer", link: "/en/vue-webapp/options/footer" },
          { text: "Navigation drawer", link: "/en/vue-webapp/options/drawer" },
          { text: "Navbar", link: "/en/vue-webapp/options/navbar" },
          { text: "BaseIcon", link: "/en/vue-webapp/options/baseIcon" },
        ],
      },
      {
        text: "Features",
        collapsed: false,
        items: [
          { text: "Description", link: "/en/vue-webapp/options/description" },
          { text: "Adaptability", link: "/en/vue-webapp/options/adaptability" },
          { text: "Themes", link: "/en/vue-webapp/options/themes" },
          { text: "Splash screen", link: "/en/vue-webapp/options/splash-screen" },
          { text: "Google analytics", link: "/en/vue-webapp/options/google-analytics" },
          { text: "Open graph", link: "/en/vue-webapp/options/open-graph" },
          { text: "API layer", link: "/en/vue-webapp/options/api" },
          { text: "PWA", link: "/en/vue-webapp/options/pwa" },
          { text: "Github Pages deploy", link: "/en/vue-webapp/options/ga-gp" },
          { text: "i18n", link: "/en/vue-webapp/options/i18n" },
        ],
      },
    ],
  },
];
