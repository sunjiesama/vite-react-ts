import path from 'path'

import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { presetUno, transformerDirectives } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import eslintPlugin from 'vite-plugin-eslint' // 引入

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    Unocss({
      transformers: [transformerDirectives()],
      presets: [presetUno(), presetRemToPx()],
    }),
    eslintPlugin({
      cache: false,
      include: '/.(jsx?|tsx?|vue|svelte)$/',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
