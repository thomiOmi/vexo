// https://nuxt.com/docs/api/configuration/nuxt-config

// Dynamic Theme Loader
// Reads THEME_NAME from environment and extends the corresponding theme layer
const themeName = process.env.THEME_NAME || "corporate";
const themePath = `../../themes/${themeName}`;

export default defineNuxtConfig({
  // Extend the selected theme layer dynamically
  extends: [themePath],

  modules: ["@nuxt/eslint"],

  compatibilityDate: "2026-01-30",

  // Ensure proper alias resolution for monorepo layers
  alias: {
    "~": "./",
    "@": "./",
  },
});
