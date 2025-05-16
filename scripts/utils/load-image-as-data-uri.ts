import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

export const loadImageAsDataUri = async (relativePath: string): Promise<string> => {
  const buf: Buffer = await fs.readFile(path.join(process.cwd(), relativePath));

  const pngBuffer = await sharp(buf).toFormat('png').toBuffer();

  return `data:image/png;base64,${pngBuffer.toString('base64')}`;
};
