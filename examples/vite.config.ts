import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nested-grid/',
  plugins: [react()],
  resolve: {
    alias: {
      '@nested-grid/core': path.resolve(__dirname, '../packages/core/src'),
      '@nested-grid/react': path.resolve(__dirname, '../packages/react/src'),
      '@nested-grid/react-cards': path.resolve(__dirname, '../packages/react-cards/src'),
    },
  },
})
