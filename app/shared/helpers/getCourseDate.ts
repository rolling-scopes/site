import dayjs from 'dayjs';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const staleDate = dayjs().subtract(staleAfterDays, 'day');
  const isValidDate = dayjs(startDate).isValid();
  const isStale = !isValidDate || dayjs(startDate).isBefore(staleDate);

  return isStale ? 'TBD' : startDate;
};
