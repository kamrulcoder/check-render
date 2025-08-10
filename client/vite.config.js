import { defineConfig } from 'vite'

// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          // For debugging proxy issues
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Proxying request to:', proxyReq.path);
          });
        }
      }
    }
  }
})