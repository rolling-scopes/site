/* eslint-disable no-undef */

import { join } from 'node:path';

export const BUILD_ASSETS_DIRNAME = join('build', 'assets');
export const COMPRESS_QUALITY = Number(process.env.VITE_COMPRESS_QUALITY);
export const TABLET_RESIZE = Number(process.env.VITE_TABLET);
export const MOBILE_RESIZE = Number(process.env.VITE_MOBILE);
export const RESIZE_VALUES = [TABLET_RESIZE, MOBILE_RESIZE];
