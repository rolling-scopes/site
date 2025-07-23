import { TypeUpcomingCoursesWithoutUnresolvableLinksResponse } from '@/shared/types/contentful';
import type { BaseEntry } from 'contentful';

export function isUpcomingCoursesSection<TSection extends BaseEntry>(
  section: TSection,
): section is Extract<TSection, TypeUpcomingCoursesWithoutUnresolvableLinksResponse> {
  return section?.sys?.contentType?.sys?.id === 'upcomingCourses';
}
