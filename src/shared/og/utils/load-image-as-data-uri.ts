import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const loadImageAsDataUri = async (relativePath: string): Promise<string> => {
  try {
    const absPath = path.resolve(process.cwd(), relativePath);
    const buf = await fs.readFile(absPath);

    const pngBuffer = await sharp(buf)
      .toFormat('png', {
        compressionLevel: 9,
        quality: 90,
      })
      .toBuffer();

    return `data:image/png;base64,${pngBuffer.toString('base64')}`;
  } catch (error) {
    console.error(`Error loading image from ${relativePath}:`, error);
    throw error;
  }
};
