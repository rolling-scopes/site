import { dayJS } from '@/app/services/dayjs';

export const getCourseDate = (startDate: string) => {
  const isValidDate = dayJS(startDate).isValid();
  const isStale = !isValidDate || dayJS(startDate) < dayJS().subtract(14, 'day');

  return isStale ? 'TBD' : startDate;
};
