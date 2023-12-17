<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useData } from 'vitepress'

const { site } = useData()
const data = useData()


onMounted(() => { 
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("t")) {
        const tt = searchParams.has("t") + 1;
        document.querySelectorAll("main details")[tt].open = true;    
    }    

    let config = JSON.parse(localStorage.getItem("vue-faq-config"));
    // console.log(data);    
    if (!config) {
        config = {
            version: 1.4,
            visits: 0,
            notifications: {
                telegram: true,
                githubStars: false,
            }
        };
        // localStorage.setItem("vue-faq-config", config);
    }
    config.visits++;

    if (!config.notifications.githubStars && (site.value.lang === "ru" || navigator.language === "ru-RU") && config.visits > 2) {
        showTelegramNotification(localStorage, config);
    }    
    localStorage.setItem("vue-faq-config", JSON.stringify(config));
});

function showTelegramNotification(localStorage, config) {
    const str =`
    <h3>Уважаемые читатели</h3>
    За последние 30 дней согласно Google Analytics у нас было более 1000 регулярно заходящих пользователей сайта, и на данный момент всего 27 GitHub звезд. Данный показатель очень важен для open source проектов как обратная связь.

    У нас есть планы по развитию ресурса, и он никогда не будет платным, но если данный показатель останется на низком уровне, мы будем вынуждены пересмотреть планы и частично ограничить доступ.

    <h3 style="text-align: end;"><u><a target="_blank" href="https://github.com/vuesence/vue-faq">Поставить GitHub звезду</a></u></h3>
    `;
    toast(str, {
        autoClose: 20000,
        type: "info",
        delay: 500,
        dangerouslyHTMLString: true,
        // icon: "💬",
        transition: toast.TRANSITIONS.FLIP,
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: "auto",
        onClose: () => {
            config.notifications.githubStars = true;
            localStorage.setItem("vue-faq-config", JSON.stringify(config));
        },
        onClick: () => {
            config.notifications.githubStars = true;
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