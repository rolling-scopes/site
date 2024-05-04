/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), stubAssetImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/__tests__/setup-tests.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/__tests__/visual',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    coverage: {
      provider: 'v8',
      exclude: [
        'node_modules',
        '.eslintrc.cjs',
        '**/*.types.ts',
        '@/**',
        '**/vite-env.d.ts',
        '**/icons/**',
        '**/main.tsx',
        '**/__tests__',
        '**/index.ts',
        'build',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});

function stubAssetImport() {
  return {
    name: 'stub-asset-import',
    transform(_code: string, id: string) {
      if (id.endsWith('.svg') || id.endsWith('.webp')) {
        return `export default 'mocked-image-path.webp'`;
      }
    },
  };
}
