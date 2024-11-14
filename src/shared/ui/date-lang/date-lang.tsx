import classNames from 'classnames/bind';
import Image from 'next/image';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { DateStart } from '@/shared/ui/date-start';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

interface DateLangProps {
  startDate: string;
  registrationEndDate: string;
  mode: string;
  language: string[];
  withMargin?: boolean;
}

export const DateLang = ({
  startDate,
  registrationEndDate,
  language,
  mode,
  withMargin,
}: DateLangProps) => {
  return (
    <section className={cx('info', { margin: withMargin })}>
      <p className={cx('date')}>
        <Image className={cx('icon')} src={noteIcon} alt="note-icon" />
        <span>Start:</span>
        <DateStart courseStartDate={startDate} registrationEndDate={registrationEndDate} />
      </p>
      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
        <span className={cx('language')}>{language}</span>
        <span>•</span>
        <span className={cx('mode')}>{mode}</span>
      </p>
    </section>
  );
};
