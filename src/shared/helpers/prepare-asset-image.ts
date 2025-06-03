import { StaticImageData } from 'next/image';

import { prepareHttpsUrl } from '@/shared/helpers/prepare-https-url';
import type { AssetFile } from 'contentful';

export function prepareAssetImage(asset: AssetFile | undefined): StaticImageData {
  if (!asset) {
    throw new Error('Assets is not defined.');
  }

  const src = prepareHttpsUrl(asset.url);
  const width = asset.details.image?.width ?? 0;
  const height = asset.details.image?.height ?? 0;

  return {
    src,
    width,
    height,
  };
}
