# Helpful hints

::: details What are some good libraries for working with ...?

### Carousel or slider

[Keen-Slider](https://keen-slider.io/), [Embla Carousel](https://www.embla-carousel.com/), [Splide](https://splidejs.com/)

Well known [Swiper](https://swiperjs.com/) is not so good for the Vue.js

### Date and time

[day.js](https://day.js.org/), [day-fnc.js](https://date-fns.org/)

Well known [moment.js](https://momentjs.com/) is irretrievably obsolete.

::: tip
Modern JavaScript is much more than it was 10 years ago. In 95% of cases the capabilities of the standard JavaScript `Intl` package are sufficient for date-time operations
:::

::: details How to catch the moment when the user scrolls to a certain place or to make a virtual scroll?

Intersection Observer

:::

<!-- There is only one percolation case in the triple. -->
<!-- When the classes of the component's root element are the same as the parent's classes. -->

::: details i18n - application internationalization

The NPM library for internationalization and localization i18n is very popular, but it has grown very large in recent years. It has a lot of features for localizing dates, numbers, setting the right declensions, RTL language support, downloading locales from the server and a bunch of other things. The i18next site even calls it an "internationalization framework".

At the same time, localization of a site often requires very simple things that take up only a couple of percent of the entire functionality of the i18n heavyweight.

In fact, you usually need a reactive function that returns a string based on the key and the current locale.

A variant of implementation via composable is in [this article](https://www.reddit.com/r/vuejs/comments/13omkwi/detox_for_i18n/).

Your bundle will be "thinner" by 50Kb.
:::

::: details Options API or Composition API?

We recommend Composition API (script setup) as more logical and convenient, in which the programmer controls the flow of program execution by means of JavaScript, and not just by setting some magic options.

:::

::: details Ref or Reactive?

Difference in terms of usage - Reactive only works with objects and does not track object replacement. Ref works with everything and tracks variable replacement:

```js
const a = Ref(1);
const b = Reactive({ x: 1 });

// is OK
a.value = 2;

// is NOT OK
b = { x: 2 };
```

The implementations of reactive variables in Vue 2 and Vue 3 are different. Vue 2 had its own (framework) implementation of change tracking. In Vue 3, the Proxy object introduced in ES6 is used for this purpose. Because of the support for this functionality at the language level (JavaScript engine), the corresponding framework code is more efficient and simpler.

Reactive uses the Proxy object directly.

Ref on an object uses Reactive directly to track changes within the object, and creates and uses an array of variable dependencies for primitives and objects in case they are replaced.

If you want pretentious efficiency, use Reactive on objects and Ref on primitives. Otherwise, you can do everything via Ref.

:::

::: details ShallowRef

When you have an array with a large number of elements, but the data inside the array elements does not change, but only the array itself can change (adding elements, deleting, replacing the array) - use `ShallowRef`.

It works like `Ref` but does not track changes inside array elements, which gives a significant performance improvement.

:::

::: details Mixins

We should forget about them like a bad dream. Mixins as a pattern of multiple inheritance is a very bad architectural practice and should be avoided. In Vue 2, the framework itself did not have a way to make the component part of the steit and methods common, so mixins were used. In Vue 3, the Composition API has been introduced and mixins are no longer needed.

:::

::: details Pug and Stylus
In the Vue ecosystem (including development tools), these technologies are poorly supported and not recommended for use.
:::

::: details Chrome DevTools custom formatters

Google Chrome and some Chromium-based browsers have a setting in DevTools in the Console section - "Enable custom formatters". Once enabled, reactive objects will be shown in the console and in popups during debugging in a more readable form:

![image](/images/faq/chrome-formatter-1.jpg)

instead of the standard one:

![image](/images/faq/chrome-formatter-2.jpg)

It is possible to temporarily disable the setting programmatically:

```js
const old = window.devtoolsFormatters;
delete window.devtoolsFormatters;
// will print out data without custom formatting
console.log(obj);
window.devtoolsFormatters = old;
```
:::
