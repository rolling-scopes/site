import { Section } from '@/entities/course/types';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeCommunicationWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformCommunicationSection(
  section: TypeCommunicationWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const content = richTextRenderer(section.fields.content);
  const image = prepareAssetImage(section.fields.image?.fields?.file);

  return {
    id,
    data: {
      title,
      content,
      image,
    },
  };
}
