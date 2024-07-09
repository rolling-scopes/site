import dayjs from 'dayjs';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const isValidDate = dayjs(startDate).isValid();
  const isStale = !isValidDate || dayjs(startDate) < dayjs().subtract(staleAfterDays, 'day');

  return isStale ? 'TBD' : startDate;
};
