import path from 'path'
import Unocss from "unocss/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { presetUno, transformerDirectives } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), Unocss({
    transformers: [transformerDirectives()],
      presets: [
                presetUno(),
                presetRemToPx()
            ],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
