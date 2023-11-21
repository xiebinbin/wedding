import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import {presetUno,presetWind,presetIcons} from 'unocss';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetWind(),
        presetIcons()
      ],
    }),
    React(),
  ],
})
