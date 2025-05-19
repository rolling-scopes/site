import fs from 'node:fs/promises';
import path from 'node:path';

import type { Font } from '../types/types';

const loadFont = async (weight: 400 | 700): Promise<Font> => {
  const fileName = weight === 700 ? 'Inter_28pt-Bold.ttf' : 'Inter_28pt-Regular.ttf';
  const fontPath = path.join(process.cwd(), 'public', 'fonts', fileName);

  try {
    const buffer = await fs.readFile(fontPath);
    const arrayBuffer = new Uint8Array(buffer).buffer;

    return {
      name: 'Inter',
      data: arrayBuffer,
      weight,
      style: 'normal',
    };
  } catch (error) {
    console.error(`Error loading font (${fileName}):`, error);
    throw new Error(`Failed to load font: ${fileName}`);
  }
};

const fontRegularPromise: Promise<Font> = loadFont(400);
const fontBoldPromise: Promise<Font> = loadFont(700);

const [fontRegular, fontBold] = await Promise.all([
  fontRegularPromise,
  fontBoldPromise,
]);

export const fonts: Font[] = [fontRegular, fontBold];
