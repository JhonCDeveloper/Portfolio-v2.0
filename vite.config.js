import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-v2.0/', // mismo nombre del repo
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});