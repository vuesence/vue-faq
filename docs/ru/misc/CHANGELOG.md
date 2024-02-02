<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/vitepress.css";

import "release-timeline/dist/animated-background.css";
// import '../../../../Vuesence/release-timeline/src/vitepress.css'
// import ReleaseTimeline from '../../../../Vuesence/release-timeline/src/ReleaseTimeline.vue'
// import { DefaultOptions as options } from "../../../../Vuesence/release-timeline/src/options";

options.github.owner = "vuesence";
options.github.repo = "vue-faq";

</script>

<ReleaseTimeline :options="options" />
