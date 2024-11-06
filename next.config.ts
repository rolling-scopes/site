import { NextConfig } from 'next';
import nextra from 'nextra';
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
      @import "@/core/styles/_constants.scss";
      @import "@/core/styles/_mixins.scss";
      @import "@/core/styles/_placeholders.scss";
    `,
  },
  devIndicators: { appIsrStatus: false },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

export default withNextra(nextConfig);
