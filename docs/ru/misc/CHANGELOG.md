<script setup>
// import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import { DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/animated-background.css";
import ReleaseTimeline from '../../../../Vuesence/release-timeline/src/ReleaseTimeline.vue'
// import { DefaultOptions as options } from "./utils";

options.github.owner = "vuesence";
options.github.repo = "arty-crafty";

</script>

<ReleaseTimeline :options="options" />