// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["../_base"],

  modules: ["@nuxt/eslint"],

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
