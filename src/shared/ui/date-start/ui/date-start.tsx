'use client';

import React, { HTMLProps } from 'react';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';
import { getCourseDate } from '@/shared/helpers/getCourseDate';

type DateStartProps = HTMLProps<HTMLTimeElement> & {
  date: string;
};

export const DateStart = ({ date, ...props }: DateStartProps) => {
  const freshDate = getCourseDate(date, COURSE_STALE_AFTER_DAYS);
  let dateAttr = undefined;

  if (freshDate !== TO_BE_DETERMINED) {
    dateAttr = dayJS(date).toISOString();
  }

  return (
    <time {...props} dateTime={dateAttr}>
      {freshDate}
    </time>
  );
};
