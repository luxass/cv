import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import vercel from '@astrojs/vercel/serverless'
import icon from 'astro-icon'
import { FontaineTransform } from 'fontaine'

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
    defaultStrategy: 'load',
  },
  compressHTML: false,
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    edgeMiddleware: true,
    functionPerRoute: false,
  }),
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
      }),
    ],
  },
})
