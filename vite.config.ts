import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  define: {
    'process.env.RS_SCHOOL': JSON.stringify(process.env.RS_SCHOOL || ''),
    'process.env.RS_SCHOOL_HOST': JSON.stringify(process.env.RS_SCHOOL_HOST || ''),
    'process.env.RS_HOST': JSON.stringify(process.env.RS_HOST || ''),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/styles'),
    },
  },
});
