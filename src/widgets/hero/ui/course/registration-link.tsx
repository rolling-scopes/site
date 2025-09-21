'use client';

import { TO_BE_DETERMINED } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/get-course-date';
import { ApiResourceLocale } from '@/shared/types/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { heroCourseLocalized } from 'data';

type RegistrationLink = {
  enrollLink?: string;
  startDate: string;
  registrationEndDate: string;
  locale: ApiResourceLocale;
};

export const RegistrationLink = ({
  enrollLink,
  startDate,
  registrationEndDate,
  locale,
}: RegistrationLink) => {
  const enrollHref = enrollLink ?? '';
  const freshDate = calculateFreshDate(startDate, registrationEndDate);

  const isCourseStale = freshDate === TO_BE_DETERMINED;
  const isDisabled = !enrollLink || isCourseStale;

  const registrationLinkLabel = heroCourseLocalized[locale].linkLabel;
  const registrationLinkDisabledLabel = heroCourseLocalized[locale].noLinkLabel;

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
