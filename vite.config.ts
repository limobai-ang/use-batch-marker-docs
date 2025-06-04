import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/use-batch-marker-docs/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
