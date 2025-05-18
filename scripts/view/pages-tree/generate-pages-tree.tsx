import React from 'react';

import { stylesPageTree } from './generate-pages-tree.styles';
import { PageData } from '../../types/types';
import { loadImageAsDataUri } from '../../utils/load-image-as-data-uri';

const rsBannerPromise = loadImageAsDataUri('src/shared/assets/svg/RsBanner.svg');
const rsMascotsPromise = loadImageAsDataUri('src/shared/assets/mentor-with-his-students.webp');
const mapBgPromise = loadImageAsDataUri('src/shared/assets/map.webp');

export async function createPageTree({
  page: { title, description },
}: PageData): Promise<React.JSX.Element | null> {
  const [rsBannerUri, rsMascotsUri, mapBgUri] = await Promise.all([
    rsBannerPromise,
    rsMascotsPromise,
    mapBgPromise,
  ]);

  if (!mapBgUri || !rsMascotsUri || !rsBannerUri) {
    console.error('Error loading images');
    return null;
  }

  return (
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
  );
}
