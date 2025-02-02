---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vue FAQ"
  text: "Vue JavaScript framework FAQ"
  tagline: Most frequently asked questions about Vue.js
  actions:
    - theme: brand
      text: Get Started
      link: /en/misc/introduction
    - theme: alt
      text: Why Vue?
      link: /en/frontend/about-frameworks
    - theme: alt alt-border
      text: Версия на русском языке
      link: /ru/
  image:
    src: /images/vue-faq-logo.webp
    alt: Vue FAQ

features:
  - title: Frontend
    details: General issues of frontend development - architecture, design patterns, best practices are discussed
  - title: Vue 3
    details: Focuses on Vue 3, Composition API and the Vue ecosystem of recent years.
  - title: Nuxt-free
    details: Nuxt is a separate standalone framework that deserves its own FAQ
---

<script setup>
  import { onMounted} from "vue";

  onMounted(() => {
    if (!"ru-RU".includes(navigator.language)) {
      document.querySelector(".actions .action:nth-child(3)").style.display = "none";
    };
  });

</script>

<style lang="css">
.VPButton.alt.alt-border {
  border-color: #fce728;
  &:hover {
    border-color: #f4dc02;
  }
}
</style>
