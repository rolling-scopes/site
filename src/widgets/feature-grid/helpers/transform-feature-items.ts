import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseItemWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { FeatureItem } from '@/widgets/feature-grid/types';

export function transformFeatureItems(
  items: (TypeAboutCourseItemWithoutUnresolvableLinksResponse | undefined)[],
): FeatureItem[] {
  return items.map((item): FeatureItem => {
    if (!item) {
      throw new Error('Grid item is not defined.');
    }

    const heading = item.fields.heading;
    const variant = item.fields.variant;
    const content = richTextRenderer(item.fields.content);
    const icon = prepareAssetImage(item.fields.icon?.fields.file);

    return {
      id: heading,
      variant,
      heading,
      content,
      icon,
    };
  });
}
