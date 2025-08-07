import { TypeVideoBlockWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

/**
 * Determines if a given section is of the type "videoBlock".
 *
 * @param {TSection} section - The section to evaluate.
 * @return {boolean} Returns true if the section is a "videoBlock" type, otherwise false.
 */
export function isVideoBlockSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeVideoBlockWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.VIDEO_BLOCK;
}
