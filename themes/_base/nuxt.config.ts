// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],

  tailwindcss: {
    exposeConfig: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },

  components: [
    {
      path: "components",
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2026-01-30",
});
