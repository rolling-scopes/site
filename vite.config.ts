import { vitePlugin as remix } from '@remix-run/dev';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),

    tsconfigPaths(),
  ],
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
      '@': path.resolve(__dirname, './app'),
      '@styles': path.resolve(__dirname, './app/app/styles'),
      data: path.resolve(__dirname, 'dev-data'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: `
          @import "@styles/_constants.scss";
          @import "@styles/_mixins.scss";
          @import "@styles/_placeholders.scss";
        `,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
