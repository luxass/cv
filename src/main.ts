import { ViteSSG } from "vite-ssg"

import { routes } from "vue-router/auto/routes"
import App from "./App.vue"

import "@unocss/reset/tailwind.css"
import "./globals.css"
import "uno.css"

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
)
