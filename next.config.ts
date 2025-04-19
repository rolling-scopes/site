import { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  output: 'export',
  distDir: './build',
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `
      @use '@/core/styles/constants' as *;
      @use '@/core/styles/mixins' as *;
      @use '@/core/styles/placeholders' as *;
    `,
  },
  devIndicators: false,
};

export default nextConfig;
