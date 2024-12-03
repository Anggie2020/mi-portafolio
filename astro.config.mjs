import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
  site: 'https://anggie2020.github.io',
  base: '/mi-portafolio/'
});
