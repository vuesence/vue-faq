# Protocols. To REST or not to REST?

::: details REST, WebSockets, JSON-RPC

For a beginner, of course, it's more convenient to start with `REST` - requests to the server in any way.

For the more experienced, especially fullstackers, I suggest to take a look at `JSON-RPC`.

`WebSockets` is convenient because it gives bidirectional communication (the server can send messages to the client), but requires special software on the backend.

:::

::: details Why JSON-RPC?

After an experience with JSON-RPC, communication with back end is usually never the same again.

It gives order, clarity, rigor and at the same time flexibility. It greatly simplifies and makes code understandable both on the frontend and backend.

In addition, JSON-RPC is the de facto standard for Web 3.0 communications.

A variant of TypeScript implementation of frontend api service on JSON-RPC - [here](https://github.com/vuesence/vue-webapp/blob/main/src/services/api/jsonrpc.ts).

When using `JSON-RPC`, switching to `WebSockets` or other transport protocols will not cause any difficulties due to the unification of the message format.

:::

::: details How to organize reconnection of WebSocket connection on the front?

You need an `Event bus`, which will work as a proxy for incoming messages.

You can use [mitt](https://github.com/developit/mitt).

:::

::: details What is GraphGL?

A complex thing, an attempt to translate SQL query language for client-server queries on the web.

It has a rather specific use, mostly with third-party data providers via APIs.

For your own fullstack application - 99% unnecessary solution.

:::
