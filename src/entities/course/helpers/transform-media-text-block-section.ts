import { Section } from '@/entities/course/types';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeMediaTextBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformMediaTextBlockSection(
  section: TypeMediaTextBlockWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const content = richTextRenderer(section.fields.content);
  const image = section.fields.image && prepareAssetImage(section.fields.image.fields.file);
  const isImageOnLeft = section.fields.imageLayoutPosition;
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;

  return {
    id,
    name,
    data: {
      title,
      content,
      image,
      isImageOnLeft,
      registrationLinkText,
      registrationClosedLinkText,
    },
  };
}
