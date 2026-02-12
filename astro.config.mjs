// @ts-check

import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://beta.accuguide.org",
  trailingSlash: "never",
  integrations: [
    sanity({
      projectId: "z2kaw7st",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-11-07",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
    sitemap(),
  ],

  adapter: netlify(),
});
