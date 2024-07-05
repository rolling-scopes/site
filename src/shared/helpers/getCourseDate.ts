import { dayJS } from '@/app/services/dayjs';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const isValidDate = dayJS(startDate).isValid();
  const isStale = !isValidDate || dayJS(startDate) < dayJS().subtract(staleAfterDays, 'day');

  return isStale ? 'TBD' : startDate;
};
