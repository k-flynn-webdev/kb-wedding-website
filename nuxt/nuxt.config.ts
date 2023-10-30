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
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    dir: "assets/images",
  },
  nuxt3WinstonLog: {
    maxSize: "2048m",
    maxFiles: "30d",
    infoLogPath: "../log_folder",
  },
  runtimeConfig: {
    isDev: process.env.NUXT_IS_DEV ?? true,
    public: {
      // apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "default value",
    },
  },
});
