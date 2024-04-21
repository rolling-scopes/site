/* eslint-disable no-undef */

import { join } from 'node:path';

export const BUILD_ASSETS_DIRNAME = join('build', 'assets');
export const COMPRESS_QUALITY = Number(process.env.VITE_COMPRESS_QUALITY);
export const TABLET_RESIZE = Number(process.env.VITE_TABLET);
export const MOBILE_RESIZE = Number(process.env.VITE_MOBILE);
export const RESIZE_VALUES = [TABLET_RESIZE, MOBILE_RESIZE];

export const styles = {
  bold: '\x1b[1m',
  italic: '\x1b[3m',
};

export const colors = {
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  gray: '\x1b[90m',
};
