'use client';

import { TO_BE_DETERMINED } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/get-course-date';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { heroCourseLocalized } from 'data';

type RegistrationLink = {
  enrollLink?: string;
  startDate: string;
  registrationEndDate: string;
  language: Language;
};

export const RegistrationLink = ({
  enrollLink,
  startDate,
  registrationEndDate,
  language,
}: RegistrationLink) => {
  const enrollHref = enrollLink ?? '';
  const freshDate = calculateFreshDate(startDate, registrationEndDate);

  const isCourseStale = freshDate === TO_BE_DETERMINED;
  const isDisabled = !enrollLink || isCourseStale;

  const registrationLinkLabel = heroCourseLocalized[language].linkLabel;
  const registrationLinkDisabledLabel = heroCourseLocalized[language].noLinkLabel;

  return (
    <LinkCustom
      href={enrollHref}
      variant="secondary"
      external
      disabled={isDisabled}
      disabledLabel={registrationLinkDisabledLabel}
    >
      {registrationLinkLabel}
    </LinkCustom>
  );
};
