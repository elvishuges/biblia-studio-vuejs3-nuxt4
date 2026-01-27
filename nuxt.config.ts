// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  pages: true, // false if you do not wish to use the Nuxt `vue-router` integration.
  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
});
