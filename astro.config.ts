import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site";

const base = process.env.PUBLIC_BASE || "/";

export default defineConfig({
  site: SITE.url,
  base,
  integrations: [sitemap()],
});
