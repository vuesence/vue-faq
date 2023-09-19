# Options to leverage your backend for frontenders

::: details How to test frontend on backend data?

There are many services that offer their API with different data for testing or full-fledged work

For example, [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).

Google `"json placeholder"`.

:::

::: details Are there any free open APIs with real data?

Plenty. For example, [here](https://github.com/public-apis/public-apis)

Google `public api`.

You can also poke around relevant sites in DevTools / Network for endpoints with data in a suitable format

:::

::: details How to make your own backend?

If you already know JavaScript, it should not be a problem to install and run Node.js with an HTTP server.

Node.js is not a very popular server for the Internet, but for a small project will do.

In absolute terms, it is easiest to install and start working with Nginx and PHP

Most major cloud providers (Amazon, Google, Oracle, Microsoft) provide free plans with the ability to run a virtual server. By putting what is required there, you can want both a back end and a front end bundle.

:::

::: details What is BaaS (Backend as a service)?

It is a cloud solution where the backend in the form of a database and its access interface, and possibly the ability to use some logic, is provided by a BaaS provider.

For example, a NoSQL database and access to it is provided by Google using its Firebase service

Alternative with PostgreSQL - Supabase

That is, your frontend will access their specific endpoints and get the services you need - for example, to save and query data in the database.

Both services provide the ability to do authentication on the site. Thus, a front-end developer can write an application using such a service without writing his own backend code and without placing it somewhere on a server on the Internet.

These services have free plans with rather large resources.

:::

::: details Business logic on BaaS

Most BaaS services provide not only CRUD access to their database, but also the ability to write custom logic in the form of Cloud Functions in Firebase, Edge Functions in Supabase, AWS Lambda in Amazon, etc.

These functions are code in some programming language that will be called when a certain backend endpoint is accessed.

In case a frontend developer wants to make a full-fledged application, but doesn't want to bother with a standalone backend, this is a pretty good and very economical solution.

:::

::: details How Edge/Cloud/Lamda features work

It's basically a backend in miniature

Your front end accesses a given endpoint (via the BaaS provider's BaaS service API gateway) - e.g. `/api/somefunc`

There lies a script written by you in js or other programming language, which is executed, has access to the database and can do other things (load data from the internet for example).

Then the script generates a result and returns it to your front end.

:::
