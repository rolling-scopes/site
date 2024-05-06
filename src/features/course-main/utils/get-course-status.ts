import dayjs from 'dayjs';
import { hasDayInDate } from '.';
import { CourseStatus } from '@/app/types';

export function getCourseStatus(date: string): CourseStatus {
  const now = dayjs();
  const startDate = dayjs(date);

  const isAvailable =
    hasDayInDate(date) && startDate.isBetween(now.subtract(2, 'week'), now.add(2, 'week'));
  const isUpcoming = startDate.isBetween(now, now.add(3, 'month'));

  let label = CourseStatus.PLANNED;

  if (isAvailable) {
    label = CourseStatus.AVAILABLE;
  }

  if (isUpcoming) {
    label = CourseStatus.UPCOMING;
  }

  return label;
}
