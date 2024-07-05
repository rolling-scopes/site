import { dayJS } from '@/app/services/dayjs';

export const getCourseDate = (startDate: string) => {
  const isStale = dayJS(startDate) < dayJS().subtract(14, 'day');

  return isStale ? 'TBD' : startDate;
};
