import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
    cors: true,
    // Add strict port to avoid conflicts
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Optimize build for better performance
    minify: 'esbuild',
    target: 'esnext'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Clear the root configuration to ensure proper path resolution
  root: '.',
  // Define global constants
  define: {
    'process.env': {}
  }
})