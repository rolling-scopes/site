import { LearningPathStageItem } from '@/entities/course/types';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import {
  TypeLearningPathStageItemWithoutUnresolvableLinksResponse,
} from '@/shared/types/contentful';

export function transformLearningPathStageItem(
  item: TypeLearningPathStageItemWithoutUnresolvableLinksResponse | undefined,
): LearningPathStageItem {
  if (!item) {
    throw new Error('Learning path stage item is not defined.');
  }

  const id = item.sys.id;
  const title = item.fields.title;
  const image = item.fields.image?.fields?.file
    ? prepareAssetImage(item.fields.image?.fields?.file)
    : undefined;
  const content = richTextRenderer(item.fields.content);

  return {
    id,
    title,
    image,
    content,
  };
}
