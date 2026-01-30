import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../_base"],

  modules: ["@nuxt/eslint"],

  components: [
    {
      path: join(currentDir, "templates"),
      prefix: "Theme",
      global: true,
    },
    {
      path: "components",
      pathPrefix: false,
    },
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "#1e3a8a",
          },
        },
      },
    },
  },

  compatibilityDate: "2026-01-30",
});
