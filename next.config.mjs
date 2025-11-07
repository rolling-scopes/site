import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: './build',
  images: { unoptimized: true },
  sassOptions: {
    implementation: 'sass-embedded',
    includePaths: [path.join(__dirname, 'src')],
    prependData: `
      @use '@/core/styles/constants' as *;
      @use '@/core/styles/mixins' as *;
      @use '@/core/styles/placeholders' as *;
      @use '@/core/styles/functions' as *;
    `,
  },
  devIndicators: false,
};

export default nextConfig;
