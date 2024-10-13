import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Use the dynamic port from Render, fallback to 3000 if not set
    host: '0.0.0.0',  // Bind to all available network interfaces
  }
})
