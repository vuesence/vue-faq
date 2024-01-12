---
head:
  - - meta
    - name: og:site_name
      content: vue-webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---
# Getting started

## Installation via `create vue-webapp`

With this method, you can select which options will be installed:

```sh
$ pnpm create vue-webapp

√ Project name: ... my-vue-project
√ Add a Splash screen? ... no / yes
√ Make it PWA (adds service worker and manifest)? ... no / yes
√ Add Open Graph meta tags? ... no / yes
√ Add Google Analytics code? ... no / yes
√ Add Github Action Workflow for publishing it on GitHub Pages? ... no / yes
√ Select application layout » MainLayout
√ Select navigation drawer » SimpleDrawer
√ Select webapp navbar » MantineSimpleNavbar
√ Select webapp header » MantineSimpleHeader
√ Select webapp footer » MantineRichFooter
√ Add API layer (REST)? ... no / yes
√ Add JSON-RPC adapter? ... no / yes

Scaffolding project in /home/ubuntu/my-vue-project...
```

:::details Silent installation

It is possible to scaffold the app without manually entering parameters by specifying a configuration file with options:

```bash
pnpm create vue-webapp -c config.json
// or
pnpm create vue-webapp --config config.json
```

The format of the `config.json` file should be like this:

```json
{
  "projectName": "my-vue-project",
  "splashScreen": false,
  "pwa": true,
  "openGraph": false,
  "googleAnalytics": false,
  "githubActionsGithubPagesWorkflow": true,
  "layout": "mainLayout",
  "navigationDrawer": "SimpleDrawer",
  "navbar": "MantineSimpleNavbar",
  "header": "MantineSimpleHeader",
  "footer": "MantineRichFooter",
  "api": true,
  "jsonRpc": false,
  "overwrite": true
}
```
The `overwrite` parameter tells whether to overwrite the content in case of existing directory. It accepts values: "yes", "no" and "ignore".

Also, the command

```bash
$ pnpm create vue-webapp .
```
will create the project in the current directory.
:::

This method will only install the selected components and functionality

### Initializing and launching a web application

```sh
$ cd my-vue-project
$ pnpm i
$ pnpm dev
```

Result in a browser:

![image](/images/vue-webapp/webapp-start.png)

## Installation from the repository

With this method everything will be installed, but a minimum of functionality will be enabled. It is useful for testing all available components and functionality.

```sh
$ git clone https://github.com/vuesence/vue-webapp.git
$ cd vue-webapp
$ pnpm i
$ pnpm dev
```

<style scoped>
img {
    border: 1px solid #ddd;
}
</style>
