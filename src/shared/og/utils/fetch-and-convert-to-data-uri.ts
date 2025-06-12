import sharp from 'sharp';

export async function fetchAndConvertToDataUri(url: string): Promise<string> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch image from ${url}: ${res.status} ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const pngBuffer = await sharp(buffer)
      .png({
        compressionLevel: 9,
        quality: 90,
      })
      .toBuffer();

    const base64 = pngBuffer.toString('base64');

    return `data:image/png;base64,${base64}`;
  } catch (err) {
    console.error(`[fetchAndConvertToDataUri] Error for URL "${url}":`, err);
    throw err;
  }
}
