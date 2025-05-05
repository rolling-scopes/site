import { StaticImageData } from 'next/image';

import { prepareHttpsUrl } from '@/shared/helpers/prepare-https-url';
import type { Asset } from 'contentful';

export function findAssetImageById<TResource extends string>(
  assets: Asset<'WITHOUT_UNRESOLVABLE_LINKS', TResource>[] | undefined,
  id: string | undefined,
): StaticImageData {
  if (!assets) {
    throw new Error('Assets is not defined!');
  }

  if (!id) {
    throw new Error('Id is not defined!');
  }

  const iconData = assets.find((asset) => asset.sys.id === id);

  const src = prepareHttpsUrl(iconData?.fields.file?.url ?? '');
  const width = iconData?.fields.file?.details.image?.width ?? 0;
  const height = iconData?.fields.file?.details.image?.height ?? 0;

  return {
    src,
    width,
    height,
  };
}
