import { Section } from '@/entities/course/types';
import { findAssetImageById } from '@/shared/helpers/find-asset-image-by-id';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeTrainingProgramWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { ApiAssets } from '@/shared/types/types';

export function transformTrainingProgramSection(
  assets: ApiAssets,
  section: TypeTrainingProgramWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const imageId = section.fields.image?.sys.id;
  const registrationLinkText = section.fields.registrationLinkText;
  const registrationClosedLinkText = section.fields.registrationClosedLinkText;
  const image = findAssetImageById(assets, imageId);
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
