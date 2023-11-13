# Configuring the IDE

::: details Which IDE should I choose?

Vue is recommended by Microsoft VS Code. The second most popular is WebStorm

In VS Code, new official extensions for Vue appear much earlier, and in general this environment is very convenient for development in general, there are a lot of useful extensions - for example, you can run a GitHub Action and see its output right in the editor.

WebStorm gives more possibilities to work in js, html, but it glitches with TypeScript and not only in SFC script setup, and in general it doesn't keep up with changes in Vue.

For beginners VS Code is the best choice

:::

::: details Necessary VS Code extensions

When working with Vite and Vue 3:

- ESlint
- Volar

Could be useful:

- Typescript Vue Plugin
- Codeium
- SFTP
- GitHub Actions

:::

::: details VS Code Customization

VS Code allows you to do very fine customization. For example, try creating this local customization file `.vscode/setting.json` and see how the editor changes.

::: details settings.json

<<< ./vs-code-settings.json{json}

:::

::: details ESlint

Linter is a coder's right hand. It checks for errors, formats code, and does many other useful things

At the same time, it is quite a nontrivial task to set up ESlint well. There are a lot of plugins for it, some of them are outdated, many of them conflict with each other.

That's why for not very sophisticated ESlint connoisseurs it's best to use a ready-made solution. The second person in Vue ecosystem Antony Fu shared [his config](https://github.com/antfu/eslint-config).

To install it, just add the `@antfu/eslint-config` package to `package.json` `devDependencies`. If you look inside, there are dozens of picked packages and configurations.

Unfortunately, formatting the `<style>` block in `.vue` files doesn't work, so you have to enable `Prettier` in manual mode as well.

:::

::: details Online sandboxes for Vue 3

- [Vue SFC Playground](https://play.vuejs.org/)
- [Replit](https://replit.com/)
- [StackBlitz](https://stackblitz.com/edit/vitejs-vite-usvaqn?file=index.html&terminal=dev)
- [Codesandbox](https://codesandbox.io/s/vue-3-glziy)

:::

::: details More programs useful in web development

- [Hoppscotch/](https://hoppscotch.io/) - API requests
- [Postman](https://www.postman.com/) - API requests, API creation
- [Xshell](https://www.netsarang.com/en/xshell/) - handy SSH client
- [HeidiSQL](https://www.heidisql.com/) - client for accessing SQL databases

:::

::: details What computer configuration is suitable for frontend development?

At least 16GB RAM and a good (fast) SSD disk, everything else is secondary, including the processor. Spend your money on a quality second 22+ inch monitor, a comfortable keyboard and mouse.

For fullstack development (and not only) it is convenient to have a mini-PC where you can transfer database, webserver and other [micro]services. It can work as a server, without a monitor and keyboard.

You can also put a source code repository on it. From the main machine the connection goes to VS Code via SSH Remote connection. As a result, both back and front end (Node.js) run on your miniserver, and your laptop no longer gets warm and tries to take off with the help of frantically spinning fans.

It is much more productive (MySQL, webservers, Docker run faster and more reliably on Linux, as does Node.js), comfortable and quieter. The cooler of the mini-PC in normal mode is turned on only for a couple of seconds when the OS is booting.

:::
