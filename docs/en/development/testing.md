# Testing

::: details Do I need testing on the frontend?

There are several types of tests, among them are unit tests and integration (e2e) tests

Unit testing in Vue is done by [Vitest](https://vitest.dev/), [Jest](https://jestjs.io/).

You should be more careful with front-end testing, as writing and rewriting tests can often take time comparable to the development itself. At the same time, the usefulness of these tests will be highly questionable. Their expediency appears on large projects with a large number of developers. There unit tests also take time but reduce the probability that someone will mess something up. At the same time, unit tests are not the most necessary ingredient for quick MVP creation at a startup.

Frontend development in this aspect is very different from backend development, where unit tests are really useful.

Good article on this topic - [Unit Test Fetish](https://250bpm.com/blog:40/)

:::

::: details What are e2e tests?

On the front end, especially for a web application that is already in production and needs to be updated from time to time, e2e tests are important.

e2e (end-to-end) testing is a software testing process that simulates real user actions at the interface level.

In this case, a browser will be launched (usually in headless mode - without UI), and it will use the scripts written to check the work of the site - the presence of elements on the page, the possibility of login, etc.

The main tools for e2e testing are [Cypress](https://www.cypress.io/), [WebdriverIO](https://webdriver.io/).

In CI/CD projects, running tests is one of the main moments along with linting and build.

:::
