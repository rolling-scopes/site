import { join } from 'node:path';

export const BUILD_ASSETS_DIRNAME = join('build', 'assets');
export const COMPRESS_QUALITY = Number(process.env.VITE_COMPRESS_QUALITY);
export const MOBILE_RESIZE = Number(process.env.NEXT_PUBLIC_MOBILE);
export const TABLET_RESIZE = Number(process.env.NEXT_PUBLIC_TABLET);
