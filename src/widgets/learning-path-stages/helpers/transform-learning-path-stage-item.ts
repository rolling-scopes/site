import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import {
  TypeLearningPathStageItemWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';

export function transformLearningPathStageItem(
  section: TypeLearningPathStageItemWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const image = section.fields.image?.fields?.file
    ? prepareAssetImage(section.fields.image?.fields?.file)
    : undefined;
  const content = richTextRenderer(section.fields.content);
  const imageWidth = section.fields.imageWidth;
  const imageHeight = section.fields.imageHeight;

  return {
    id,
    name,
    data: {
      title,
      image,
      content,
      imageWidth,
      imageHeight,
    },
  };
}
