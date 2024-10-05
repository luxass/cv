import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { FontaineTransform } from "fontaine";
import unocss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    unocss({
      injectReset: true,
    }),
    icon(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  compressHTML: false,
  output: "hybrid",
  adapter: netlify(),
  vite: {
    plugins: [FontaineTransform.vite({
      fallbacks: ["Arial"],
      resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
    })],
  },
});
