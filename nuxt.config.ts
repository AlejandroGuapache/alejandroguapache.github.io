import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  app: {
    buildAssetsDir: "assets",
    head: {
      htmlAttrs: {
        lang: "es",
      },
      title: "Boda Alejandro & Verónica",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [],
    },
  },
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        images: fileURLToPath(new URL("./assets/images", import.meta.url)),
      },
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  image: {
    dir: "public",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
    format: ["webp", "jpg", "png"],
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-countdown",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Lora: [400, 500, 600, 700],
          "Abhaya Libre": [400, 500, 600, 700],
        },
      },
    ],
  ],
  ssr: false,
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
});
