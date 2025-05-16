import { Section } from '@/entities/course/types';
import { findAssetImageById } from '@/shared/helpers/find-asset-image-by-id';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { ApiResourceLocale } from '@/shared/types';
import { TypeTrainingProgramWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { Asset } from 'contentful';

export function transformTrainingProgramSection(
  assets: Asset<'WITHOUT_UNRESOLVABLE_LINKS', ApiResourceLocale>[] | undefined,
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
