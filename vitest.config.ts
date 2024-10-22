/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), stubNextAssetImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'data': path.resolve(__dirname, 'dev-data'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/shared/__tests__/setup-tests.tsx'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/__tests__/**',
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


/**
 * We need this custom plugin, because of the difference between Vite and Next.js
 * in terms of static asset import is as follows
 *
 * import vercelLogo from "../public/vercel.svg";
 * 
 * In Vite: vercelLogo is a string
 * In Next.js: vercelLogo is an object { src: string; width: number; height: number}
 */
function stubNextAssetImport() {
  return {
    name: 'stub-next-asset-import',
    transform(_code: string, id: string) {
      if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
        const imgSrc = path.relative(process.cwd(), id);
        return {
          code: `export default { src: '/${imgSrc}', height: 1, width: 1 }`,
        };
      }
    },
  };
}
