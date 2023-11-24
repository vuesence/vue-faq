<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useData } from 'vitepress'

const { site } = useData()
const data = useData()
let config = JSON.parse(localStorage.getItem("vue-faq-config"));

onMounted(() => { 
    // console.log(data);    
    if (!config) {
        config = {
            version: 1.4,
            visits: 0,
            notifications: {
                telegram: false,
            }
        };
        // localStorage.setItem("vue-faq-config", config);
    }
    config.visits++;

    if (!config.notifications.telegram && (site.value.lang === "ru" || navigator.language === "ru-RU")) {
        showTelegramNotification();
    }    
    localStorage.setItem("vue-faq-config", JSON.stringify(config));
});

function showTelegramNotification() {
    const str =`
    <h3>У нас есть Телеграм канал</h3>
    В нем публикуются анонсы о новых материалах на данном ресурсе и другая интересная относящаяся к Vue.js информация.

    Перейти на канал: <b><a target="_blank" href="https://t.me/vuefaq">https://t.me/vuefaq</a></b>
    `;
    toast(str, {
        autoClose: 10000,
        type: "info",
        delay: 500,
        dangerouslyHTMLString: true,
        // icon: "💬",
        transition: toast.TRANSITIONS.FLIP,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "auto",
        onClose: () => {
            config.notifications.telegram = true;
            localStorage.setItem("vue-faq-config", JSON.stringify(config));
        },
        onClick: () => {
            config.notifications.telegram = true;
            localStorage.setItem("vue-faq-config", JSON.stringify(config));
        },
    });
}
</script>

<template>
  <DefaultTheme.Layout />
</template>

<style>
:root {
  --toastify-toast-width: 420px;
}
h3 {
    font-weight: 600;
    font-size: larger;
}
</style>