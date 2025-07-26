import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeHighlightCardWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformHighlightCard(
  section: TypeHighlightCardWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const heading = section.fields.heading;
  const content = richTextRenderer(section.fields.content);
  const icon = prepareAssetImage(section.fields.icon?.fields?.file);

  return {
    id,
    name,
    data: {
      heading,
      content,
      icon,
    },
  };
}
