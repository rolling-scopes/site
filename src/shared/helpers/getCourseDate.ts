import dayjs from 'dayjs';

import { TO_BE_DETERMINED } from '@/shared/constants';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const staleDate = dayjs().subtract(staleAfterDays, 'day');
  const isValidDate = dayjs(startDate).isValid();
  const isStale = !isValidDate || dayjs(startDate).isBefore(staleDate);

  return isStale ? TO_BE_DETERMINED : startDate;
};
