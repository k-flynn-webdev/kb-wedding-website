// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/style/main.scss"],
  app: {
    head: {
      title: "Kev & Bels Wedding 2024!",
    },
  },
  modules: ["nuxt3-winston-log", "@nuxtjs/tailwindcss", "@nuxt/image"],
  nitro: {},
  image: {
    dir: "assets/images",
  },
  nuxt3WinstonLog: {
    maxSize: "2048m",
    maxFiles: "30d",
    infoLogPath: "./logs",
  },
});
