// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node"; // Importation de l'adaptateur Node
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://virgil-gayte.me",
  output: 'server', // Active le mode Server-Side Rendering (SSR)
  adapter: node({
    mode: "standalone", // Génère un serveur prêt à l'emploi
  }),

  integrations: [mdx(), react(), sitemap({
    i18n: {
      defaultLocale: 'fr',
      locales: {
        fr: 'fr',
        en: 'en'
      }
    }
  })],

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});