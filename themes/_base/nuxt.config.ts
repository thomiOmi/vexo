// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],

  tailwindcss: {
    exposeConfig: true,
  },

  components: [
    {
      path: "templates",
      prefix: "Theme", // Example: <ThemeHome />
      global: true, // Crucial for dynamic component resolution
    },
    {
      path: "components",
      pathPrefix: false,
    },
  ],

  compatibilityDate: "2026-01-30",
});
