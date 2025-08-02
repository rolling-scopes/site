import { TypeLearningPathStagesWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

/**
 * Checks if the given section is a "Learning Path Stages" section by validating the content type ID.
 *
 * @param {TSection} section - The section to be checked, which extends the BaseEntry.
 * @return {boolean} - Returns true if the section is of type `TypeMediaTextBlockWithoutUnresolvableLinksResponse`, otherwise false.
 */
export function isLearningPathStagesSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeLearningPathStagesWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.LEARNING_PATH_STAGES;
}
