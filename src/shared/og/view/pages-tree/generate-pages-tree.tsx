import { ImageResponse } from 'next/og';

import { stylesPageTree } from './generate-pages-tree.styles';
import { getFonts } from '../../utils/load-fonts';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/shared/constants';

type PageData = {
  title: string;
  description: string;
};

const imageCache = new Map<string, Promise<string | null>>();

function loadSafeImage(filePath: string): Promise<string | null> {
  if (!imageCache.has(filePath)) {
    const promise = loadImageAsDataUri(filePath).catch((err) => {
      console.error(`[OG] Failed to load image: ${filePath}`, err);
      return null;
    });

    imageCache.set(filePath, promise);
  }

  return imageCache.get(filePath)!;
}

export async function createPageTree({ title, description }: PageData): Promise<ImageResponse> {
  const [rsBannerUri, rsMascotsUri, mapBgUri] = await Promise.all([
    loadSafeImage('src/shared/assets/svg/RsBanner.svg'),
    loadSafeImage('src/shared/assets/mentor-with-his-students.webp'),
    loadSafeImage('src/shared/assets/map.webp'),
  ]);
  const fonts = await getFonts();

  return new ImageResponse(
    (
      <div style={stylesPageTree.container}>
        {mapBgUri && <img src={mapBgUri} alt="" aria-hidden="true" style={stylesPageTree.mapBg} />}
        <div style={stylesPageTree.content}>
          <h1 style={stylesPageTree.title}>{title}</h1>
          <p style={stylesPageTree.description}>{description}</p>
        </div>

        {rsMascotsUri && (
          <div style={stylesPageTree.mascotsContainer}>
            <img src={rsMascotsUri} alt="" aria-hidden="true" style={stylesPageTree.mascots} />
          </div>
        )}

        <div style={stylesPageTree.yellowBar} />

        {rsBannerUri && (
          <img src={rsBannerUri} alt="" aria-hidden="true" style={stylesPageTree.banner} />
        )}
      </div>
    ),
    {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      fonts,
    },
  );
}
