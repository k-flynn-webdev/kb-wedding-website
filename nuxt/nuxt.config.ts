// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.scss"],
  app: {
    head: {
      title: "Meetup with friends in no time",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    moduleSideEffects: ["lucia/polyfill/node"],
  },
});
