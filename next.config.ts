import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: './build',
  images: { unoptimized: true },
  sassOptions: {
    additionalData: `
      @use '@/core/styles/constants' as *;
      @use '@/core/styles/mixins' as *;
      @use '@/core/styles/placeholders' as *;
      @use '@/core/styles/functions' as *;
    `,
  },
  devIndicators: false,
};

export default nextConfig;
