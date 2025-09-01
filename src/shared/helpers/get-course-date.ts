import dayjs from 'dayjs';

import { COURSE_DATE_FORMAT, MENTORING_DATE_FORMAT } from '@/entities/course/constants';
import { TO_BE_DETERMINED } from '@/shared/constants';

export const getCourseDate = (startDate: string, staleAfterDays: number) => {
  const staleDate = dayjs().subtract(staleAfterDays, 'day');
  const isValidDate = dayjs(startDate, [COURSE_DATE_FORMAT, MENTORING_DATE_FORMAT]).isValid();
  const isStale = !isValidDate || dayjs(startDate).isBefore(staleDate);

  return isStale ? TO_BE_DETERMINED : startDate;
};

export const calculateFreshDate = (courseStartDate: string, registrationEndDate: string) => {
  const staleDays = dayjs(registrationEndDate, [COURSE_DATE_FORMAT, MENTORING_DATE_FORMAT]).diff(
    courseStartDate,
    'days',
  );
  const freshDate = getCourseDate(courseStartDate, staleDays);

  return freshDate;
};
