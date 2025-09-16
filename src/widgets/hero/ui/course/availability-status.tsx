'use client';

import { dayJS } from '@/shared/helpers/day-js';
import { SectionLabel } from '@/shared/ui/section-label';
import { getCourseStatus } from '@/widgets/hero/helpers/get-course-status';

type AvailabilityStatusProps = {
  startDate: string;
  registrationEndDate: string;
};

export const AvailabilityStatus = ({ startDate, registrationEndDate }: AvailabilityStatusProps) => {
  const status = getCourseStatus(startDate, dayJS(registrationEndDate).diff(startDate, 'd'));

  return <SectionLabel data-testid="course-label">{status}</SectionLabel>;
};
