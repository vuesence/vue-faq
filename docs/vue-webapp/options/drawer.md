# Navigation drawers

На данный момент можно выбрать из двух видов навигационных шторок.

## SimpleDrawer

Всегда открыт для разрешений экрана `notebook` и `desktop`, а для мобильных устройств и планшетов открывается по клику/нажатию на иконку "гамбургера".

![](/images/vue-webapp/drawer-simple.png)

## TouchSlideoutDrawer

Аналогичен SimpleDrawer, но управляется с помощью прикосновений на сенсорных экранах. Добавляет приятный UX.

![](/images/vue-webapp/drawer-touch.gif)

Функциональность реализована с помощью [useTouchSwipe](https://github.com/vuesence/vue-webapp/blob/main/src/composables/useTouchSwipe.ts) composable функции и [TouchSlideoutDrawer](https://github.com/vuesence/vue-webapp/blob/main/src/components/drawers/TouchSlideoutDrawer.vue) компонента.


<style>
    img {
        border: 1px solid #ddd;
    }
</style>