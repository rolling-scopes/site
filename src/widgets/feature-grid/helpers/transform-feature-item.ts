import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeAboutCourseItemWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformFeatureItem(
  section: TypeAboutCourseItemWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const variant = section.fields.variant;
  const name = section.sys.contentType.sys.id;
  const heading = section.fields.heading;
  const content = richTextRenderer(section.fields.content);
  const icon = prepareAssetImage(section.fields.icon?.fields.file);

  return {
    id,
    name,
    data: {
      variant,
      heading,
      content,
      icon,
    },
  };
}
