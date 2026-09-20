import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = "https://narciss-hair.vercel.app";

export default defineConfig({
  site: siteUrl,
  output: "static",
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
