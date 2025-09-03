import sharp from 'sharp';

const cache = new Map<string, string>();

export const fetchAndConvertToDataUri = async (url: string): Promise<string> => {
  if (cache.has(url)) {
    return cache.get(url)!;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Failed to fetch image from ${url}: ${res.status} ${res.statusText}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.byteLength > 2 * 1024 * 1024) {
      throw new Error(`Image ${url} is too large (${buffer.byteLength} bytes)`);
    }

    const pngBuffer = await sharp(buffer)
      .png({
        compressionLevel: 9,
        quality: 90,
      })
      .toBuffer();

    const dataUri = `data:image/png;base64,${pngBuffer.toString('base64')}`;

    cache.set(url, dataUri);
    return dataUri;
  } catch (err) {
    console.error(`[fetchAndConvertToDataUri] Error for URL "${url}":`, err);
    throw err;
  }
};
