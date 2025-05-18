import { JSX } from 'react';
import { ImageResponse } from 'next/og';

import { Font } from '../types/types';

export async function generateImage(
  tree: JSX.Element,
  fonts: Font[],
  width = 1200,
  height = 630,
): Promise<Buffer | null> {
  if (!tree) {
    return null;
  }

  if (!fonts || fonts.length === 0) {
    return null;
  }

  try {
    const imageRes = new ImageResponse(tree, {
      width,
      height,
      fonts,
    });

    return Buffer.from(await imageRes.arrayBuffer());
  } catch (e) {
    console.error('Error generating image:', e);
    return null;
  }
}
