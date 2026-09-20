import { defineConfig } from "astro/config";
import { SITE } from "./src/config/site";

const base = process.env.PUBLIC_BASE || "/";

/** Proposal demo: no sitemap — robots.txt Disallow + meta noindex */
export default defineConfig({
  site: SITE.url,
  base,
  integrations: [],
});
