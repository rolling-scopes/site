import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-react-compiler',
            {
              runtimeModule: '@/hooks/usec',
              environment: {
                validateNoRefAccessRender: true,
              },
            },
          ],
        ],
      },
    }),
  ],
  build: {
    outDir: 'build',
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
          @import "./src/styles/_constants.scss";
          @import "./src/styles/_mixins.scss";
          @import "./src/styles/_placeholders.scss";
        `,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
