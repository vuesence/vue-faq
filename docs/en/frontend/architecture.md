# Frontend application architecture

::: details What is a good web application architecture

There are different theoretical definitions and justifications for this concept, but roughly speaking it is the following.

Let's say you are developing a project, already at the final stage. A customer comes to you and says something like: I want to add a shadow to all buttons, I want to change the UI library, we decided to support multiple languages, we decided to replace this module with another, we need to make more detailed adaptability for different resolutions, we decided to add themes, we are changing the provider of payment processing services, we have an increasing number of users / the site is slowing down / need to speed it up, need to increase the level of security of the site, we took a middle programmer, bring him up to speed quickly, and let him add functionality or fix the b

A good frontend application architecture allows you to accomplish all of this most efficiently with the least amount of effort.

:::

::: details OOP on the frontend

Many people coming from development in object-oriented languages try to use OOP concepts on the frontend and program with classes, inheritance, polymorphism and other things.

This is a mistake. The main computations on the front end are related to UI - displaying data, handling user interaction. Class systems and microservices are simply not needed on them. Of course, you can create a basic button, wrap it in two custom components and consider it inheritance, but you can't do it in code. That's why you have to learn to think in other categories - components, composable functions, js modules. And use your JavaScript power, not trying to stretch it on OOP.

At the same time, a good analogy of an object with a global ("static") and local ("object") state is a composable function. It can be used in certain situations.

:::

::: details Multithreading and asynchronicity

**Multithreading** is when a programmer can create a separate thread and run his specific code in it. For example, you can create two threads, one in an infinite loop outputs "Thread A" to the console and the other "Thread B". These strings will alternate in the output. You can prioritize the threads, and then the thread with priority 3 will output messages 3 times more often than the thread with priority 1.

These two threads should be executed simultaneously, but this is conditional. Because if there are 10 threads and the processor is dual-core with two threads per core, it is physically impossible to execute more than 4 simultaneous threads. That's why threads are divided into pieces of code and they are executed one by one - this is called concurrency.

In the JavaScript world, threads can become queued at the JS runtime, OS, CPU level. Common desktop applications (for example, IDEs) can also have good support for parallelization on multi-core processors - and then they use CPUs as efficiently as possible, or load only one core. In the latter case, upgrading to a newer multi-core CPU will do almost nothing if the old and the new one have approximately the same frequency.

**Asynchronicity** is when there is some non-blocking function whose exact execution time is unknown. And the programmer can specify the code to be executed after this function is executed (pass a callback). Promises and async/await are non-trivial but still just convenient wrappers over this logic.

So, with asynchronicity, there is usually some border function that depends on external circumstances (`fetch, nextTick, fs.readdir, setTimeout`). Its "pseudo-parallel" execution in one thread together with the main code is provided by the `Event Loop` mechanism.

Thus, these are completely different things both in purpose and usage. asynchronicity in JavaScript is realized through promises and async/await, multithreading or its similarity is realized by rantime (`Web workers`, `worker_threads`).

Asynchronicity is needed to communicate with the "outside world", including browser rendering. Multithreading allows to separate resource-intensive computations (as well as network requests) into separate threads (`Web workers`), which reduces the load on the main thread, which is responsible for rendering. This has a favorable effect on the responsiveness of your UI.

:::

::: details Useful tips

###### Avoid dependencies

If there is a possibility not to introduce a new dependency (not to plug in a new npm package) - don't do it. It may save you a bit of time, but a third-party library will sooner or later become obsolete, no longer supported, and may have a vulnerability. Besides, it increases the size of your bundle, which directly affects the performance of your application. Tree shaking is good in advertising, but it doesn't always work in reality.

If you need, for example, the `debounce` function, don't hurry to plug it together with some library. Google its implementation and copy 15 lines of code and make your own function.

---

###### Use wrappers over components of UI libraries and third-party utilities

If you use components of some UI library, don't use them directly - make wrappers for them. For example, `BaseButton` or `BaseInput`. This will make styling the components much easier, and will also make it much easier to switch to another library, or replace them with your own components.

The same goes for utilities.

---

###### Regular refactoring

Do code refactoring from time to time, moving components and modules to where they should logically be, renaming them, and structuring and improving the code itself. This is good for both the code and your professional growth.

---

###### Use CSS3

Try to use pure CSS3 for adaptability. Do not be tied to columnar models of CSS and UI libraries, unless it is a "done and forgotten, let the customer continue to suffer with it" project.

Spend a couple of days to learn Flexbox and you will be able to layout on it faster and better than on any Tailwind.

---

###### Use modern standards and language features

For example, HTML5 semantic elements - aside, header, section, article, details, etc.

CSS3 - Flexbox and Grid, Container query

---

###### Document the project

Draw use-case and other diagrams, describe the main functionality of the project and important details of its implementation - this will at least raise your level as a software developer.

VitePress is a very handy tool for technical documentation.

:::
