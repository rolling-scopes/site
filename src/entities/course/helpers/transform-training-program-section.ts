import { Section } from '@/entities/course/types';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeTrainingProgramWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformTrainingProgramSection(
  section: TypeTrainingProgramWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;
  const image = prepareAssetImage(section.fields.image?.fields.file);
  const content = richTextRenderer(section.fields.content);

  return {
    id,
    data: {
      title,
      content,
      image,
      registrationLinkText,
      registrationClosedLinkText,
    },
  };
}
