---
head:
  - - meta
    - name: og:site_name
      content: Vue webapp
  - - meta
    - name: og:image
      content: /images/vue-webapp-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-webapp-logo.png
---

# Github Actions script to deploy to Github Pages

## Deployment

Uses [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) Github Action to deploy a site to the `gh-pages` branch of the same repository, which automatically makes the site available at `https://youGitHubUsername.github.io/my-vue-webapp` (if your project and repository is called `my-vue-webapp`).

- Create a branch in the repository called `gh-pages`
- Go to the "Settings" section of your repository
- Under "Code and automation" in the sidebar, click Pages.
- Under "Build and deployment" under "Source", select "Deploy from a branch".
- Under "Build and deployment" under the "Branch" heading, use the branch drop-down menu and select the branch you want - `gh-pages`.

More details:

- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pages](https://docs.github.com/ru/pages/quickstart)

## Setting `base` in Vite config

If you don't have a custom domain, you need to put the name of your repository as `base` in `vite.config.ts` so that the site can be accessed from the above link:

```js
export default defineConfig({
  base:"/my-vue-webapp/"
});
```

If you have a custom domain (like `yourname.com`), this parameter is not needed.