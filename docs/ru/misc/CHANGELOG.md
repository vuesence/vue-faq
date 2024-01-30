<script setup>
import { ReleaseTimeline, DefaultOptions as options } from "release-timeline";
import "release-timeline/dist/style.css";
import "release-timeline/dist/animated-background.css";

options.github.owner = "vuesence";
options.github.repo = "arty-crafty";

</script>

<ReleaseTimeline :options="options" />