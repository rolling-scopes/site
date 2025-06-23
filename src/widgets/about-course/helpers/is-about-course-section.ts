import { TypeAboutCourseWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

/**
 * Determines if the provided section is of the content type 'aboutCourse'.
 *
 * @param section - The section to be checked, constrained to extend BaseEntry.
 * @return Returns true if the section is of the type 'aboutCourse', otherwise false.
 */
export function isAboutCourseSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeAboutCourseWithoutUnresolvableLinksResponse> {
  return section.sys.contentType.sys.id === 'aboutCourse';
}
