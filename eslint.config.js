import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: [".vscode/settings.json", ".vscode/settings.json/**", "src/assets/locales/*.json", "src/assets/locales/*.json/**"],
  rules: {
    "ts/semi": "off",
    "curly": ["error", "all"],
    "no-console": "off",
    "no-alert": "off",
    "vue/html-self-closing": "off",
    "style/semi": ["error", "always"],
    "style/indent": 2, // 4, or 'tab'
    "style/quotes": [
      "error",
      "double",
    ],
    "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
  },
});
