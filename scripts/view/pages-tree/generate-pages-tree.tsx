import React from 'react';

import { stylesPageTree } from './generate-pages-tree.styles';

export function createPageTree(
  title: string,
  description: string,
  rsBannerUri: string,
  rsMascotsUri: string,
  mapBgUri: string,
): React.JSX.Element {
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
