import dayjs from 'dayjs';
import { hasDayInDate } from '.';
import { CourseStatus } from '@/app/types';

export function getCourseStatus(courseStartDate: string): CourseStatus {
  const now = dayjs();
  const startDate = dayjs(courseStartDate);

  // Status is "Available" if a start date is set and it is within 2 weeks before or after the current date
  const isAvailable =
    hasDayInDate(courseStartDate)
    && startDate.isBetween(now.subtract(2, 'week'), now.add(2, 'week'));

  // Status is 'Upcoming' if the course will start within the next 3 months
  const isUpcoming = startDate.isBetween(now, now.add(3, 'month'));

  // Other dates
  let label = CourseStatus.PLANNED;

  if (isAvailable) {
    label = CourseStatus.AVAILABLE;
  }

  if (isUpcoming) {
    label = CourseStatus.UPCOMING;
  }

  return label;
}
