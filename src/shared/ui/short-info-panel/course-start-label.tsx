'use client';

import { PropsWithChildren } from 'react';

import { calculateFreshDate } from '@/shared/helpers/getCourseDate';
import { DateSimple } from '@/shared/ui/date-simple';

type CourseStartLabelProps = PropsWithChildren & {
  startDate: string | null;
  registrationEndDate: string | null;
  label: string | undefined;
};

export const CourseStartLabel = ({
  startDate,
  registrationEndDate,
  label,
  children,
}: CourseStartLabelProps) => {
  const freshDate =
    startDate && registrationEndDate ? calculateFreshDate(startDate, registrationEndDate) : null;

  return (
    <DateSimple label={label} startDate={freshDate}>
      {children}
    </DateSimple>
  );
};
