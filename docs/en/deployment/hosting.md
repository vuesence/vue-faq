# Hosting

::: details Where to host a website?

After building a frontend project, you get a set of `html/css/js/jpeg` and other static files that need to be hosted on some webserver for your website to be online.

Hosting options with free plans:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://netlify.com)
- [Render](https://render.com/)
- [Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)
- [Heroku](https://Heroku.com/)
- [Amazon S3](https://aws.amazon.com/s3/)

Also, many cloud providers (Amazon, Google, Oracle, Microsoft) provide free plans with the ability to get a virtual server on which you can install a webserver (Nginx, Apache) and your website yourself. In this case, the backend can also be placed on it.

:::

::: details Domain

Buying a domain is now very easy and inexpensive (from $1 per year), so it is recommended to do so. GitHub Pages and other hosting providers allow you to connect a custom domain to your site. Subdomains are convenient for organizing development environments:

- dev.website.com
- dev-api.website.com
- website.com
- api.website.com
- docs.website.com

:::

::: details SSL certificates

Modern browsers require a website to be accessible via HTTPS protocol. This requires an SSL certificate for your domain. Hosting providers like Firebase or Github Pages will provide you with the certificate themselves. If you host your site yourself on a cloud server, you can generate the certificate using CertBot software.

:::
