---
pageClass: release-timeline
head:
  - - meta
    - name: og:site_name
      content: Release timeline - visual component displaying GitHub release timeline
  - - meta
    - name: og:image
      content: /images/vue-faq-logo.png
  - - meta
    - name: twitter:image
      content: /images/vue-faq-logo.png
---

# Установка

## Установка пакета

```bash [pnpm]
pnpm add release-timeline
```

## Использованиe в коде

Во Vue компоненте или в VitePress .md файле:

```vue
<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
// import "release-timeline/dist/animated-background.css";

// configure options
options.github.owner = "vuesence";
options.github.repo = "arty-crafty";
</script>

<ReleaseTimeline :options="options" />
```

Подключение `animated-background.css` опционально. CSS со звездным небом занимает 70Kb.
