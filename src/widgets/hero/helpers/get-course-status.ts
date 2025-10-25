import { hasDayInDate } from './has-day';
import type { CourseStatus } from '@/entities/course';
import { COURSE_STALE_AFTER_DAYS, COURSE_UPCOMING_PERIOD_MONTHS } from '@/shared/constants';
import dayjs from '@/shared/helpers/day-js';
import { ApiResourceLocale } from '@/shared/types';
import { courseStatus } from 'data';

export function getCourseStatus(
  courseStartDate: string,
  courseStaleAfterDays: number = COURSE_STALE_AFTER_DAYS,
  lang: ApiResourceLocale = 'en-US',
): CourseStatus {
  const now = dayjs();
  const startDate = dayjs(courseStartDate);

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
  const label: CourseStatus = courseStatus[lang].planned;

  if (isAvailable) {
    return courseStatus[lang].available;
  }

  if (isUpcoming) {
    return courseStatus[lang].upcoming;
  }

  return label;
}
