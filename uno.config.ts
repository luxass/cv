import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "Lexend",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
