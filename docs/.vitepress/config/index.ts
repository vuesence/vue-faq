import { defineConfig } from "vitepress";
import nav_en from "./nav.en";
import nav_ru from "./nav.ru";
import sidebar_en from "./sidebar.en";
import sidebar_ru from "./sidebar.ru";
import sidebar_book_ru from "./sidebar.book.ru";
import sidebar_vue_webapp_ru from "./sidebar.vue-webapp.ru";
import sidebar_vue_webapp_en from "./sidebar.vue-webapp.en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/ru/",
  locales: {
    ru: {
      lang: "ru",
      label: "Русский",
      themeConfig: {
        nav: nav_ru,
        sidebar: {
          "/ru/": sidebar_ru,
          "/ru/book/": sidebar_book_ru,
          "/ru/vue-webapp/": sidebar_vue_webapp_ru,
        },
        lastUpdated: {
          text: 'Последнее обновление',
        },
        outline: {
          label: "Содержание"
        },
        returnToTopLabel: "Наверх"
      },
      head: [        
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JL65GWRNZZ');`,
        ],
      ],
    },
    en: {
      lang: "en",
      label: "English",
      themeConfig: {
        nav: nav_en,
        sidebar: {
          "/en/": sidebar_en,
          "/en/vue-webapp/": sidebar_vue_webapp_en,
        },
      },
      head: [
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JCCRGKJ88B" }],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JCCRGKJ88B');`,
        ],
      ],
    },
  },
  lang: "en",
  title: "Vue FAQ",
  description: "Vue JavaScript framework FAQ",
  head: [
    // ["meta", { name: "og:type", content: "article" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Vue FAQ" }],
    ["meta", { property: "og:image", content: "/images/vue-faq-logo.webp" }],
    ["meta", { name: "twitter:image", content: "/images/vue-faq-logo.webp" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-JL65GWRNZZ" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JL65GWRNZZ');`,
    ],
  ],
  themeConfig: {    
    logo: "/images/vue-faq-logo.webp",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config            
    socialLinks: [      
      { icon: "github", link: "https://github.com/vuesence/vue-faq" },
      { icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg"><g><text font-weight="bold" xml:space="preserve" font-size="18" id="svg_1" y="16" x="8" fill="currentColor">Star it!</text></g></svg>'}, link: "https://github.com/vuesence/vue-faq" },
      // {
      //   icon: {
      //     svg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 93.51"><defs><style>.cls-1{fill:#2b3344;}.cls-2{fill:#fe0000;fill-rule:evenodd;}.cls-3{fill:#fff;}</style></defs><title>new-message</title><path class="cls-1" d="M6,18.25H64.91a33.1,33.1,0,0,0-.79,5H8.37L52.84,58.93l17-14.28A34.64,34.64,0,0,0,73,48.54l-4.7,4.06h0L99.05,85.28V58.8a32.85,32.85,0,0,0,5-.7V87.54a5.92,5.92,0,0,1-1,3.34,2.22,2.22,0,0,1-.56.84,2.39,2.39,0,0,1-.56.4,6,6,0,0,1-3.81,1.39H6a6,6,0,0,1-6-6V24.22a6,6,0,0,1,6-6ZM5,85,36.87,52.66,5,26.33V85ZM40.85,56,8.43,88.06H95.36L64.41,56,54.35,64.93h0a2.29,2.29,0,0,1-2.92,0L40.85,56Z"/><path class="cls-2" d="M97,0a25.9,25.9,0,1,1-25.9,25.9A25.91,25.91,0,0,1,97,0Z"/><path class="cls-3" d="M93.71,31.49V20.35a7.28,7.28,0,0,1-4.62,2.32V16.36c2.11-.21,4.89-1.49,6-3.37h6.11v18.5h3.63v5.72h-15V31.49Z"/></svg>'
      //   },
      //   link: '/',
      // },
    ],
  },
  lastUpdated: true,
  sitemap: {
    hostname: "https://vue-faq.org"
  }
});
