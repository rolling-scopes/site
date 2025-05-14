import fs from 'node:fs/promises';
import path from 'node:path';

export const loadImageAsDataUri = async (relativePath: string, mimeType: string): Promise<string> => {
  const buf: Buffer<ArrayBufferLike> = await fs.readFile(path.join(process.cwd(), relativePath));

  return `data:${mimeType};base64,${buf.toString('base64')}`;
};
