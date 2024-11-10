import vsharp from "vite-plugin-vsharp";

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
    isDev: process.env.NUXT_IS_DEV ?? true,
    dbPath: "",
    secretId: "4897",
    public: {
      // apiBase: process.env.NUXT_PUBLIC_API_BASE ?? "default value",
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // rsvp: { prerender: true },
    "getting-there": { prerender: true },
    accommodation: { prerender: true },
    "the-big-day": { prerender: true },
    "/photos": { prerender: true },
    // Admin dashboard renders only on client-side
    // "/view-rsvps/**": { ssr: false },
    // Add cors headers on API routes
    // "/api/**": { cors: true },
  },
});
