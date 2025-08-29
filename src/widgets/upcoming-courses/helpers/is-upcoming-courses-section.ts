import { TypeUpcomingCoursesWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import { SECTION_TYPE } from '@/widgets/section-resolver/constants';
import type { BaseEntry } from 'contentful';

export function isUpcomingCoursesSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeUpcomingCoursesWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === SECTION_TYPE.UPCOMING_COURSES;
}
