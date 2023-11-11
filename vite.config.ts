import path from "node:path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import VueDevTools from "vite-plugin-vue-devtools"
import Unocss from "unocss/vite"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },

  plugins: [
    Vue(),
    VueRouter({
      extensions: [".vue"],
    }),
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"],
        },
      ],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
    }),
    Unocss(),
    VueDevTools(),
  ],
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
    },
  },
})
