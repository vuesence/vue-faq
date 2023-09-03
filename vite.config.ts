import { defineConfig } from "vite";
import { SearchPlugin } from "vitepress-plugin-search";
import vue from "@vitejs/plugin-vue";

//default options
var options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), SearchPlugin(options)],
});
