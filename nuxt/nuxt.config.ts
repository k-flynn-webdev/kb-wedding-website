import vsharp from "vite-plugin-vsharp";

console.log(process.env);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [vsharp()],
  },
  css: ["@/assets/style/main.scss"],
  app: {
    head: {
      title: "Kev & Bels Wedding 2024!",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: [
    "nuxt-security",
    "nuxt3-winston-log",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
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
    isDev: Boolean(process.env.NUXT_IS_DEV ?? true),
    dbPath: "",
    secretId: "4897",
    admin: {
      user: "4897",
      password: "4897",
    },
    public: {
      // apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "default value",
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { ssr: true },
    rsvp: { ssr: true },
    "getting-there": { ssr: true },
    // Admin dashboard renders only on client-side
    "/view-rsvps/**": { ssr: false },
    // Add cors headers on API routes
    "/api/**": { cors: true },
  },
});
