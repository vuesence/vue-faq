# Learning Vue

::: details Sources of information on Vue

For some reason, it is believed that there are only two ways to get knowledge on frontend - Vue documentation and tutorial videos from YouTube and all kinds of courses.

But documentation is not a textbook, but a reference book, and it is very difficult to separate grains from chaff on YouTube. I met some useful videos, but all of them were intended for developers who already know Vue quite well and showed some new or non-standard moments.

---

The main teacher should be a book that teaches, not a reference book.

An excellent Vue tutorial in English is the May 2023 [Vue.js 3 Design Patterns and Best Practices](https://www.oreilly.com/library/view/vuejs-3-design/9781803238074/). You can register on oReilly and read for 10 days for free. Even download it. In spite of the title, the book teaches programming, and from a fairly basic level.

[Code examples from the book](https://github.com/PacktPublishing/Vue.js-3-Design-Patterns-and-Best-Practices) are in the public repository and well worth studying.

::: tip Note
We can draw an analogy between a good developer and a driver:

1. learning the basics of driving, traffic rules and the internal combustion engine - Vue documentation and JavaScript specification
2. Practical driving training at a driving school - good textbooks like "Vue.js 3 Design Patterns and Best Practices"
3. Real driving experience - commercial development experience
4. Extreme driving courses, put a glass of water on the hood and drive a twenty year old car with a manual transmission through broken streets - quality open source projects and certifications

It is impossible to become a good developer/driver both without 1. and only with 1.
Training videos from the internet (both paid and free) can both be part of 4. and be completely useless and even harmful (very often), depending on their quality and the motivation of the student.

:::

::: details Vue 2 or Vue 3?

Vue 3.
<br />
Composition API.

If you need Vue 2 to support an existing project, you'll know the answer to that question yourself.

The difference between Vue 2 and Vue 3 is big. It's not a case of learning the previous version beforehand to better and more easily understand the next one.

:::

::: details Do I need to know JavaScript beforehand?

Absolutely, at least an intermediate level. If not, I would suggest taking a short javascript course first, so that the person knows about the document object, knows how to handle array methods and is not too afraid of promises. Also, HTML and CSS at least at a basic level.

Here is an easy to read book - ["Morgan N. - JavaScript for Kids. A Programming Self-Tutorial - 2016](https://drive.google.com/file/d/1H6HDJeRx2SAXLPJ8Rw0SqchkFZYNiZ9h/view?usp=sharing). Before you start learning Vue, it is advisable to understand 70% of the first part as well as paragraphs 10 and 12.

<!-- Also a classic resource on JavaScript - [learn.javascript.ru](https://learn.javascript.ru/)

[70 JavaScript interview preparation questions](https://habr.com/ru/articles/486820/#21) - a great test to test yourself on your knowledge of the language. -->

---

::: tip tip
Also an absolutely necessary pre-skill is the ability to google.
:::

::: details Is there a certification for Vue?
[Vue.js Certification](https://certificates.dev/vuejs)
:::

::: details Vue Style Guide

Be sure to check out the [Vue Style Guide](https://vuejs.org/style-guide/) and try to follow its best practices when writing code.

Go back to this source from time to time and improve your code.

ESlint also helps you keep your code in line with best practices.
:::

::: details Do I need a mentor?

A mentor is useful for both a beginner and an experienced developer. You can uselessly kill two days to solve a problem that can be explained in 20 minutes by a more experienced person. And this two-day "experience" will never be useful again.

In companies, this role is usually played by more competent and friendly colleagues.

There are services like [Solvery](https://solvery.io/) on the Internet that can help in this matter.

:::

::: details I still want video

There are quality ones from `Vue Mastery`, but most are outdated.

:::

::: details What else to look at besides Vue? React?

You can do React if you have a real option to use that knowledge, but it's much better to expand your developer horizons. Try to write a simple API on the backend. The easiest and most convenient language for this is PHP, but you can also use Node.js or Python. Try JSON-RPC and WebSockets transport protocols. Upload your application to GitHub Pages or another similar service, experiment with GitHub Actions - they help a lot with deploy automation and CI/CD in general. Work with Cloud providers (many offer free resources), set up a virtual server. Register a domain, make a product finished site - even if it's just your resume site or something basic on VitePress (used by this site). Work with FireStore and open APIs for various data. Check out Swagger. Learn SQL, install MySQL and play around with it, or do it on SupaBase. Understanding how data is stored and processed on the backend will help a lot in choosing the right strategies on the frontend.

Study how the modern internet works and what technologies and best practices are prevalent on it now.

:::
