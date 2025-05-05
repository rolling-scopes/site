import dayjs from 'dayjs';

import { RS_GRADUATED_ONLY, TO_BE_DETERMINED } from '@/shared/constants';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const staleDate = dayjs().subtract(staleAfterDays, 'day');
  const isValidDate = dayjs(startDate).isValid();
  const isStale = !isValidDate || dayjs(startDate).isBefore(staleDate);
  const noDateInfo = startDate === RS_GRADUATED_ONLY ? RS_GRADUATED_ONLY : TO_BE_DETERMINED;

  return isStale ? noDateInfo : startDate;
};

export const calculateFreshDate = (courseStartDate: string, registrationEndDate: string) => {
  const staleDays = dayjs(registrationEndDate).diff(courseStartDate, 'days');
  const freshDate = getCourseDate(courseStartDate, staleDays);

  return freshDate;
};
