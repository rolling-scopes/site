import { GridItem } from '@/entities/course/types';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseItemWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformGridItems(
  items: (TypeAboutCourseItemWithoutUnresolvableLinksResponse | undefined)[],
): GridItem[] {
  return items.map((item): GridItem => {
    if (!item) {
      throw new Error('Grid item is not defined.');
    }

    const heading = item.fields.heading;
    const content = richTextRenderer(item.fields.content);
    const icon = prepareAssetImage(item.fields.icon?.fields.file);

    return {
      id: heading,
      heading,
      content,
      icon,
    };
  });
}
