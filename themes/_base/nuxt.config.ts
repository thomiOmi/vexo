// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],

  tailwindcss: {
    exposeConfig: true,
  },

  compatibilityDate: "2026-01-30",
});
