'use client';

import React, { HTMLProps } from 'react';

import { TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';
import { getCourseDate } from '@/shared/helpers/getCourseDate';

type DateStartProps = HTMLProps<HTMLTimeElement> & {
  courseStartDate: string;
  registrationEndDate: string;
};

export const DateStart = ({ courseStartDate, registrationEndDate, ...props }: DateStartProps) => {
  const staleDays = dayJS(registrationEndDate).diff(courseStartDate, 'days');

  const freshDate = getCourseDate(courseStartDate, staleDays);
  let dateAttr = undefined;

  if (freshDate !== TO_BE_DETERMINED) {
    dateAttr = dayJS(freshDate).toISOString();
  }

  return (
    <time {...props} dateTime={dateAttr}>
      {freshDate}
    </time>
  );
};
