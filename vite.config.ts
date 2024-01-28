import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/styles')
    }
  }
});
