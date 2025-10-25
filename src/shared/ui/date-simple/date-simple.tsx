import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import noteIcon from '@/shared/assets/svg/note-icon.svg';
import { TO_BE_DETERMINED } from '@/shared/constants';
import dayjs from '@/shared/helpers/day-js';
import { ApiResourceLocale } from '@/shared/types';

import styles from './date-simple.module.scss';

const cx = classNames.bind(styles);

type DateStartProps = {
  startDate: string | null;
  endDate?: string | null;
  label?: string;
  labelSeparator?: string;
  children?: React.ReactNode;
  showMentoringStartDate: boolean;
  startDateFormat?: string;
  endDateFormat?: string;
  lang: ApiResourceLocale;
};

const formatDateAttr = (date: string | null | undefined): string | undefined => {
  if (!date || date === TO_BE_DETERMINED) {
    return undefined;
  }

  return dayjs(date).toISOString();
};

export const DateSimple = ({
  startDate,
  endDate,
  label,
  labelSeparator,
  children,
  showMentoringStartDate,
  startDateFormat = COURSE_DATE_FORMAT,
  endDateFormat = COURSE_DATE_FORMAT,
  lang,
}: DateStartProps) => {
  const startDateAttr = formatDateAttr(startDate);
  const endDateAttr = formatDateAttr(endDate);

  let startDateFormatted = startDate;
  let endDateFormatted = endDate;

  if (startDateFormatted !== TO_BE_DETERMINED) {
    startDateFormatted = dayjs(startDate).locale(lang).format(startDateFormat);
  }

  if (endDateFormatted !== TO_BE_DETERMINED) {
    endDateFormatted = dayjs(endDate).locale(lang).format(endDateFormat);
  }

  return (
    <p className={cx('date')}>
      {label && (
        <>
          <Image className={cx('icon')} src={noteIcon} alt="note-icon" />
          <span className={cx('bold')}>{label}</span>
        </>
      )}
      {startDate && (
        <time dateTime={startDateAttr} data-testid="date-time-start">
          {showMentoringStartDate ? startDate : startDateFormatted}
        </time>
      )}

      {labelSeparator && endDate && <span>{labelSeparator}</span>}
      {endDate && (
        <time dateTime={endDateAttr} data-testid="date-time-end">
          {endDateFormatted}
        </time>
      )}
      {children}
    </p>
  );
};
