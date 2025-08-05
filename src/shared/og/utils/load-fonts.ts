import fs from 'node:fs/promises';
import path from 'node:path';

type Font = {
  name: string;
  data: ArrayBuffer;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: 'normal' | 'italic';
};

const loadFont = async (weight: 400 | 700): Promise<Font> => {
  const fileName = weight === 700 ? 'Inter_28pt-Bold.ttf' : 'Inter_28pt-Regular.ttf';
  const fontPath = path.join(process.cwd(), 'src', 'shared', 'assets', 'fonts', fileName);

  try {
    const buffer = await fs.readFile(fontPath);

    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ) as ArrayBuffer;

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

let fontsPromise: Promise<Font[]> | null = null;

export const getFonts = (): Promise<Font[]> => {
  if (!fontsPromise) {
    fontsPromise = Promise.all([loadFont(400), loadFont(700)]);
  }
  return fontsPromise;
};
