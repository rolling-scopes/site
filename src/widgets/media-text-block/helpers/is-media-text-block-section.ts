import { TypeMediaTextBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

/**
 * Determines whether a given section is of type 'mediaTextBlock'.
 *
 * @param section - The section to check, which extends the BaseEntry type.
 * @return Returns true if the section is of type 'mediaTextBlock', otherwise false.
 */
export function isMediaTextBlockSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeMediaTextBlockWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.MEDIA_TEXT_BLOCK;
}
