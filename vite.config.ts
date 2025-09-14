import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use ./ for GitHub Pages deploy, / for local dev
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? './' : '/',
  plugins: [react()],
})
