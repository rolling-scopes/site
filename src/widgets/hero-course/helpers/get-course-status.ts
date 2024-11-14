import { hasDayInDate } from './has-day';
import { COURSE_STALE_AFTER_DAYS, COURSE_UPCOMING_PERIOD_MONTHS } from '@/core/const';
import type { CourseStatus } from '@/entities/course';
import { dayJS } from '@/shared/helpers/dayJS';
import { courseStatus } from 'data';

export function getCourseStatus(courseStartDate: string): CourseStatus {
  const now = dayJS();
  const startDate = dayJS(courseStartDate);

  // Status is "Available" if a start date is set and it is within 2 weeks before or after the current date
  const isAvailable =
    hasDayInDate(courseStartDate)
    && startDate.isBetween(
      now.subtract(COURSE_STALE_AFTER_DAYS, 'day'),
      now.add(COURSE_STALE_AFTER_DAYS, 'day'),
    );

  // Status is 'Upcoming' if the course will start within the next 3 months
  const isUpcoming =
    !isAvailable && startDate.isBetween(now, now.add(COURSE_UPCOMING_PERIOD_MONTHS, 'month'));

  // Other dates
  let label: CourseStatus = courseStatus.planned;

  if (isAvailable) {
    return courseStatus.available;
  }

  if (isUpcoming) {
    return courseStatus.upcoming;
  }

  return label;
}
