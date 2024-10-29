import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/HOC2/',
  plugins: [vue()],
  build: {
    assetsDir: 'assets'
  }
})
