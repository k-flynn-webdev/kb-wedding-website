// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.scss"],
  app: {
    head: {
      title: "Kev & Bels Wedding 2024!",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  nitro: {
    moduleSideEffects: ["lucia/polyfill/node"],
  },
  image: {
    dir: "assets/images",
  },
});
