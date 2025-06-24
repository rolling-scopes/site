import { ImageResponse } from 'next/og';

import { stylesPageTree } from './generate-pages-tree.styles';
import { fonts } from '../../utils/load-fonts';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';

type PageData = {
  title: string;
  description: string;
};

const rsBannerPromise = loadImageAsDataUri('src/shared/assets/svg/RsBanner.svg');
const rsMascotsPromise = loadImageAsDataUri('src/shared/assets/mentor-with-his-students.webp');
const mapBgPromise = loadImageAsDataUri('src/shared/assets/map.webp');

export async function createPageTree({
  title, description,
}: PageData): Promise<ImageResponse> {
  const [rsBannerUri, rsMascotsUri, mapBgUri] = await Promise.all([
    rsBannerPromise,
    rsMascotsPromise,
    mapBgPromise,
  ]);

  return new ImageResponse((
    <div style={stylesPageTree.container}>
      <img src={mapBgUri} alt="RS Logo" style={stylesPageTree.mapBg} />
      <div style={stylesPageTree.content}>
        <h1 style={stylesPageTree.title}>{title}</h1>
        <p style={stylesPageTree.description}>{description}</p>
      </div>

      <div style={stylesPageTree.mascotsContainer}>
        <img src={rsMascotsUri} alt="RS mascots" style={stylesPageTree.mascots} />
      </div>

      <div style={stylesPageTree.yellowBar} />

      <img src={rsBannerUri} alt="RS Logo" style={stylesPageTree.banner} />
    </div>
  ), {
    width: 1200,
    height: 630,
    fonts,
  },
  );
}
