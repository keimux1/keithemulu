import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : '/keithemulu/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Include PDF files as assets
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'pdfjs-dist': ['pdfjs-dist/build/pdf.worker.entry'],
        },
      },
    },
  },
});
