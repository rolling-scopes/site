import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

/**
 * Determines if the provided section is of the content type 'aboutCourse'.
 *
 * @param section - The section to be checked, constrained to extend BaseEntry.
 * @return Returns true if the section is of the type 'aboutCourse', otherwise false.
 */
export function isAboutCourseItem<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeAboutCourseWithoutUnresolvableLinksResponse> {
  return section.sys.contentType.sys.id === SECTION_TYPE.ABOUT_COURSE_ITEM;
}
