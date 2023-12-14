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

# Options when creating an application

## Available options

The following options are currently available for configuration:

- Header - top part in the application template
- Footer - bottom part of the application template
- Drawer - navigation bar
- Navbar - navigation menu (inside the drawer).
- Github Pages deploy Workflow - GitHub Actions script for build and deploy application to GitHub Pages
- PWA - add Service worker and Manifest to the application
- API module - abstraction layer for communication with backend APIs
- JSON-RPC adapter for API module
- Splash screen - splash screen during application startup to improve UX
- Google analytics - code for connecting statistics
- Open graph - meta tags for building snippets by social networks

## Available by default

- Dark theme - dark theme. All plugins support theme switching
- BaseIcon - icon component with the ability to dynamically specify a name
- BaseToggle - toggle component

## In development

- Layout - application layouts
- Global Preloader
- i18n - internationalization of the application using different variants of `i18n` libraries.

## In plans

- Online showcase for dynamic testing of different variants of application parts and functionality
- Expanding the number of variants of layout, header, footer and other components
- Auth - module framework for authentication on JWT tokens, including different variants of registration and login forms.
- Auth integration with popular service providers (Firebase and others).
- GitHub Actions for application deployment to various services (Vercel, Heroku, Firesbase) and other useful CI/CD scripts.
- Check on startup for its new version and reboot to avoid browser cache issues
- Themes - application themes (include both different color palettes and the ability to change other CSS parameters for deep customization of the template and components)
