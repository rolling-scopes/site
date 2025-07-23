import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaGridWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformMediaGridSection(
  section: TypeMediaGridWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const description = section.fields.description
    ? richTextRenderer(section.fields.description)
    : undefined;
  const media = section.fields.media.map((item) => prepareAssetImage(item?.fields?.file));

  return {
    id,
    name,
    data: {
      title,
      description,
      media,
    },
  };
}
