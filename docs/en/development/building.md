# Create and build an application

::: details Building an application

To build a Vue project into browser-friendly files, you need a builder. The most popular ones are `Vite` and `Webpack`.

Vite is newer and uses modern technologies including `esbuild` for `dev` builds to transpile TypeScript to JavaScript, which is 20~30 times faster than regular tsc, making HMR dozens of times faster than on Webpack. The `Rollup` builder is used to build JavaScript for `production`.

Note that each builder collects application resources (icons, SVGs, etc.) in its own way, using its own plugins, and requires customization.

Both builders allow you to extend their capabilities with custom plugins.

:::

::: details Vite or Webpack?

Vite.

If you need Webpack, you'll know it yourself.

:::

::: details npm, yarn or pnpm?

It is recommended to use `pnpm` as the most up-to-date one

Also, by using hard links instead of copying files, it saves a lot of disk space on your computer in case of multiple projects with `node_modules` and the same packages in them.

:::

::: details Creating a Vue application

`Vue-cli` is an obsolete method

Create directly through Vite:

```sh
pnpm create vite
```

Or in an online sandbox.

See [Vite's website](https://vitejs.dev/guide/) for more information.

:::

::: details How to configure the @ alias?

Alias is a builder setting, and is set differently for each builder.

To use the @ alias in paths in a project with Vite

```js
import BaseIcon from "@/components/ui/BaseIcon.vue";
```

you need to configure it in `vite.config.j(t)s`:

```js
// vite.config.js
import path from "node:path";

export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [...],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

// package.json
"devDependencies": {
    "@types/node": "^20.3.1",
    ...
}

```

If the project supports TypeScript, then also in `tsconfig.json`:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
    // ...
  }
}
```

You may also need to set alias in ESLint config for plugins like `eslint-plugin-import` and `eslint-import-resolver-typescript` if they are used.

:::

::: details How can I see how much my js bundle has different libraries?

[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) is a great tool to do this

Generating statistics from the command line works like this (one of the options):

```sh
npx vite-bundle-visualizer
npx vite-bundle-visualizer -t list
npx vite-bundle-visualizer -t raw-data

```

:::
