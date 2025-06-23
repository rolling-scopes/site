'use client';

import { PropsWithChildren } from 'react';

import { calculateFreshDate } from '@/shared/helpers/get-course-date';
import { DateSimple } from '@/shared/ui/date-simple';

type CourseStartLabelProps = PropsWithChildren & {
  startDate: string | null;
  registrationEndDate: string | null;
  label: string | undefined;
  labelSeparator?: string;
  showRegistrationEnd?: boolean;
};

export const CourseStartLabel = ({
  startDate,
  registrationEndDate,
  label,
  children,
  labelSeparator,
  showRegistrationEnd = true,
}: CourseStartLabelProps) => {
  const freshDate =
    startDate && registrationEndDate ? calculateFreshDate(startDate, registrationEndDate) : null;
  const endDate = showRegistrationEnd ? registrationEndDate : null;

  return (
    <DateSimple
      label={label}
      startDate={freshDate}
      endDate={endDate}
      showMentoringStartDate={false}
      labelSeparator={labelSeparator}
    >
      {children}
    </DateSimple>
  );
};
