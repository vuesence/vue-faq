---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue FAQ"
  text: "Vue JavaScript framework FAQ"
  tagline: Наиболее часто задаваемые вопросы по Vue.js
  actions:
    - theme: brand
      text: Начать
      link: /ru/misc/introduction
    # - theme: alt
    #   text: Почему Vue?
    #   link: /frontend/about-frameworks
    - theme: alt
      text: Учебник
      link: /ru/book/
    - theme: alt alt-border
      text: vue-webapp билдер
      link: /ru/vue-webapp/
  image:
    src: /images/vue-faq-logo.webp
    alt: Vue FAQ

features:
  - title: Frontend
    details: Рассматриваются общие вопросы фронтенд разработки - архитектура, шаблоны, лучшие практики
  - title: Vue 3
    details: Основное внимание уделено Vue 3, Composition API и экосистеме Vue последних лет
  - title: vue-webapp
    details: Стартер кит Vue 3 проекта с различными предустановленными опциями
  - title: Vue.js 3 Design Patterns and Best Practices
    details: Перевод на русский язык прекрасного учебника по Vue 3 автора Pablo Garaguso
  - title: Nuxt-free
    details: Nuxt - отдельный самостоятельный фреймворк, заслуживающий свой собственный FAQ
  # - title: Feature C
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style lang="scss">
.VPButton.alt.alt-border {
  border-color: #fce728;
  &:hover {
    border-color: #f4dc02;
  }
}
</style>
