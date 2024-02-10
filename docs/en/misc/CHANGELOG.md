<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/vitepress.css";

import "release-timeline/dist/animated-background.css";

options.github.owner = "vuesence";
options.github.repo = "vue-faq";

</script>

<ReleaseTimeline :options="options" />


<!-- # Changelog

<br />

## v1.4 (24-11-2023)

#### Changed

- `Frontend / How to learn Vue?`
- `vue-webapp`


<br />
<br />

## v1.3 (10-10-2023)

#### Changed

- `Backend / CORS`
- `Frontend / How to learn Vue?`
- `Development / Useful tips`

<br />
<br />

## v1.2 (28-09-2023)

#### New

- `Deployment / Github Actions`

#### Changed

- `Deployment / CI/CD`
- `Deployment / Stores - Vuex, Pinia and Composition API`
- `Frontend / About frontend frameworks`

<br />
<br />

## v1.1 (15-09-2023)

### New

- `Development / Stores`

### Changed

- `Development / Helpful hints`.


<br />
<br />

## v1.0 (11-09-2023)

### New

- Initial launch -->
