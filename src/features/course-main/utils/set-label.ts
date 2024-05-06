import dayjs from 'dayjs';
import { hasDayInDate } from './has-day';
import { Labels } from '@/app/types';

export function setLabel(date: string) {
  const now = dayjs();
  const startDate = dayjs(date);

  const isAvailable =
    hasDayInDate(date) && startDate.isBetween(now.subtract(2, 'week'), now.add(2, 'week'));
  const isUpcoming = startDate.isBetween(now, now.add(3, 'month'));

  let label = Labels.PLANNED;

  if (isAvailable) {
    label = Labels.AVAILABLE;
  }

  if (isUpcoming) {
    label = Labels.UPCOMING;
  }

  return label;
}
