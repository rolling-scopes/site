import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsInlineLimit: 0,
  },
  define: {
    'process.env.RS_SCHOOL_HOST': JSON.stringify(process.env.RS_SCHOOL_HOST || ''),
    'process.env.HOST': JSON.stringify(process.env.HOST || ''),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/app/styles/_constants.scss";
          @import "./src/app/styles/_mixins.scss";
          @import "./src/app/styles/_placeholders.scss";
        `,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
