import {
  transformLearningPathStageItem,
} from '@/entities/course/helpers/transform-learning-path-stage-item';
import { Section } from '@/entities/course/types';
import { richTextRenderer } from '@/shared/helpers/rich-text-renderer';
import { TypeLearningPathStagesWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';

export function transformLearningPathStages(
  section: TypeLearningPathStagesWithoutUnresolvableLinksResponse,
): Section {
  const id = section.sys.id;
  const name = section.sys.contentType.sys.id;
  const title = section.fields.title;
  const description = section.fields.description
    ? richTextRenderer(section.fields.description)
    : section.fields.description;
  const stages = section.fields.stages.map(transformLearningPathStageItem);

  return {
    id,
    name,
    data: {
      title,
      description,
      stages,
    },
  };
}
