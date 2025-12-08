import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,
    // open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
