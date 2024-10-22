import { hasDayInDate } from './has-day';
import type { CourseStatus } from '@/entities/course';
import { dayJS } from '@/shared/helpers/dayJS.ts';

export function getCourseStatus(courseStartDate: string): CourseStatus {
  const now = dayJS();
  const startDate = dayJS(courseStartDate);

  // Status is "Available" if a start date is set and it is within 2 weeks before or after the current date
  const isAvailable =
    hasDayInDate(courseStartDate)
    && startDate.isBetween(now.subtract(2, 'week'), now.add(2, 'week'));

  // Status is 'Upcoming' if the course will start within the next 3 months
  const isUpcoming = startDate.isBetween(now, now.add(3, 'month'));

  // Other dates
  let label: CourseStatus = 'planned';

  if (isAvailable) {
    label = 'available';
  }

  if (isUpcoming) {
    label = 'upcoming';
  }

  return label;
}
