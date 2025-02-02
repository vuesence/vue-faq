import DefaultTheme from "vitepress/theme";
import "./custom.css";
import AppLayout from "./AppLayout.vue";

// DefaultTheme.enhanceApp = ({ app, router, siteData }) => {
//     console.log("app, router, siteData");
//     console.log(app);
// }
// export default DefaultTheme;
export default {
  extends: DefaultTheme,
  Layout: AppLayout,
};
