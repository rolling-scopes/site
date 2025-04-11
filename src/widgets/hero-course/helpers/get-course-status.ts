import { hasDayInDate } from './has-day';
import { COURSE_STALE_AFTER_DAYS, COURSE_UPCOMING_PERIOD_MONTHS } from '@/core/const';
import type { CourseStatus } from '@/entities/course';
import { dayJS } from '@/shared/helpers/day-js';
import { courseStatus } from 'data';

export function getCourseStatus(
  courseStartDate: string,
  courseStaleAfterDays: number = COURSE_STALE_AFTER_DAYS,
): CourseStatus {
  const now = dayJS();
  const startDate = dayJS(courseStartDate);

  // Status is "Available" if a start date is set and it is within 2 weeks before or after the current date
  const isAvailable =
    hasDayInDate(courseStartDate)
    && startDate.isBetween(
      now.subtract(courseStaleAfterDays, 'day'),
      now.add(courseStaleAfterDays, 'day'),
    );

  // Status is 'Upcoming' if the course will start within the next 3 months
  const isUpcoming =
    !isAvailable && startDate.isBetween(now, now.add(COURSE_UPCOMING_PERIOD_MONTHS, 'month'));

  // Other dates
  const label: CourseStatus = courseStatus.planned;

  if (isAvailable) {
    return courseStatus.available;
  }

  if (isUpcoming) {
    return courseStatus.upcoming;
  }

  return label;
}
