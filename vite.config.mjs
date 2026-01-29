import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // CRA allows JSX in .js files; enable the same behavior in Vite to avoid renaming your source files.
  esbuild: {
    loader: 'jsx',
  },
  // Treat uppercase .PNG images as static assets (CRA was case-insensitive here)
  assetsInclude: ['**/*.PNG'],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
  },
});


