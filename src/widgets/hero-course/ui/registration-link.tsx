'use client';

import { TO_BE_DETERMINED } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/getCourseDate';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { heroCourseLocalized } from 'data';

type RegistrationLink = {
  enrollLink: string | null;
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

  const registrationLinkText = isDisabled
    ? heroCourseLocalized[language].noLinkLabel
    : heroCourseLocalized[language].linkLabel;

  return (
    <LinkCustom href={enrollHref} variant="secondary" external disabled={isDisabled}>
      {registrationLinkText}
    </LinkCustom>
  );
};
