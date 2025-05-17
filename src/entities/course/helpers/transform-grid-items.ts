import { GridItem } from '@/entities/course/types';
import { findAssetImageById } from '@/shared/helpers/find-asset-image-by-id';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseItemWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { ApiAssets } from '@/shared/types/types';

export function transformGridItems(
  items: (TypeAboutCourseItemWithoutUnresolvableLinksResponse | undefined)[],
  assets: ApiAssets,
): GridItem[] {
  return items.map((item): GridItem => {
    if (!item) {
      throw new Error('Grid item is not defined.');
    }

    const heading = item.fields.heading;
    const content = richTextRenderer(item.fields.content);
    const iconId = item.fields.icon?.sys.id;
    const icon = findAssetImageById(assets, iconId);

    return {
      heading,
      content,
      icon,
    };
  });
}
