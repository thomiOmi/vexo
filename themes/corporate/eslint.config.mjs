// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configurations here
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/block-order": [
        "error",
        {
          order: ["script:not([setup])", "script[setup]", "template"],
        },
      ],
    },
  },
);
