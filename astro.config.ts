import { defineConfig } from "astro/config"
import unocss from "unocss/astro"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import Icons from "unplugin-icons/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://luxass.dev",
  integrations: [
    unocss({
      injectReset: true,
    }),
    sitemap(),
  ],
  experimental: {
    contentCollectionCache: true,
  },
  prefetch: true,
  compressHTML: false,
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    functionPerRoute: false,
  }),
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
})
