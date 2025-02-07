import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

import styles from '../date-lang/date-lang.module.scss';

const cx = classNames.bind(styles);

type DateStartProps = {
  startDate: string | null;
  endDate?: string | null;
  label?: string | null;
  labelSeparator?: string | null;
  children?: React.ReactNode;
};

export const DateSimple = ({
  startDate,
  endDate,
  label,
  labelSeparator,
  children,
}: DateStartProps) => {
  let startDateAttr = undefined;
  let endDateAttr = undefined;

  if (startDate && startDate !== TO_BE_DETERMINED) {
    startDateAttr = dayJS(startDate).toISOString();
  }

  if (endDate && endDate !== TO_BE_DETERMINED) {
    endDateAttr = dayJS(endDate).toISOString();
  }

  return (
    <p className={cx('date')}>
      {label && <Image className={cx('icon')} src={noteIcon} alt="note-icon" />}
      {label && <span>{label}</span>}
      {startDate && <time dateTime={startDateAttr} data-testid="date-time-start">{startDate}</time>}
      {labelSeparator && <span>{labelSeparator}</span>}
      {endDate && <time dateTime={endDateAttr} data-testid="date-time-end">{endDate}</time>}
      {children}
    </p>
  );
};
