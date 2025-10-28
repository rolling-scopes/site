'use client';

import dayjs from '@/shared/helpers/day-js';
import { ApiResourceLocale } from '@/shared/types';
import { SectionLabel } from '@/shared/ui/section-label';
import { getCourseStatus } from '@/widgets/hero/helpers/get-course-status';

type AvailabilityStatusProps = {
  startDate: string;
  registrationEndDate: string;
  lang: ApiResourceLocale;
};

export const AvailabilityStatus = ({ startDate, registrationEndDate, lang }: AvailabilityStatusProps) => {
  const status = getCourseStatus(startDate, dayjs(registrationEndDate).diff(startDate, 'd'), lang);

  return <SectionLabel data-testid="course-label">{status}</SectionLabel>;
};
