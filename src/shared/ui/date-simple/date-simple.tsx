import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

import styles from './date-simple.module.scss';

const cx = classNames.bind(styles);

type DateStartProps = {
  startDate: string | null;
  endDate?: string | null;
  label?: string;
  labelSeparator?: string;
  children?: React.ReactNode;
};

const formatDateAttr = (date: string | null | undefined): string | undefined => {
  if (!date || date === TO_BE_DETERMINED) {
    return undefined;
  }

  return dayJS(date).toISOString();
};

export const DateSimple = ({
  startDate,
  endDate,
  label,
  labelSeparator,
  children,
}: DateStartProps) => {
  const startDateAttr = formatDateAttr(startDate);
  const endDateAttr = formatDateAttr(endDate);

  return (
    <p className={cx('date')}>
      {label && (
        <>
          <Image className={cx('icon')} src={noteIcon} alt="note-icon" />
          <span>{label}</span>
        </>
      )}
      {startDate && (
        <time dateTime={startDateAttr} data-testid="date-time-start">
          {startDate}
        </time>
      )}
      {labelSeparator && endDate && <span>{labelSeparator}</span>}
      {endDate && (
        <time dateTime={endDateAttr} data-testid="date-time-end">
          {endDate}
        </time>
      )}
      {children}
    </p>
  );
};
