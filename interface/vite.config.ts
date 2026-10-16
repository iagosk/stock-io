import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '0da2-200-137-5-186.ngrok-free.app',
      '860c-200-137-5-186.ngrok-free.app'
    ],
  }
})