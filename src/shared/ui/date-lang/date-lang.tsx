import { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { Language } from '@/shared/types';
import { DateStart } from '@/shared/ui/date-start';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

type DateLangProps = PropsWithChildren & {
  startDate: string;
  registrationEndDate: string;
  language: Language;
  withMargin?: boolean;
};

export const DateLang = ({
  startDate,
  registrationEndDate,
  language,
  withMargin,
  children,
}: DateLangProps) => {
  const isEng = language === 'en';
  const courseLanguage = isEng ? 'English' : 'Russian';
  const startText = isEng ? 'Course starts on:' : 'Старт курса:';
  const dateText = children ? children : startText;

  return (
    <section className={cx('info', { margin: withMargin })}>
      <p className={cx('date')}>
        <Image className={cx('icon')} src={noteIcon} alt="note-icon" />
        <span className={cx('bold')}>{dateText}</span>
        <DateStart courseStartDate={startDate} registrationEndDate={registrationEndDate} />
      </p>
      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
        <span>{courseLanguage}</span>
      </p>
    </section>
  );
};
