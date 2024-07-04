import classNames from 'classnames/bind';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import Image from '@/shared/ui/image';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

interface DateLangProps {
  startDate: string;
  mode: string;
  language: string[];
}

export const DateLang = ({ startDate, language, mode }: DateLangProps) => {
  return (
    <section className={cx('info')}>
      <p className={cx('date')}>
        <Image className={cx('icon')} src={noteIcon} alt="note-icon" lazy="false" />
        <span>Start date:</span>
        <time>{getCourseDate(startDate)}</time>
      </p>
      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" lazy="false" />
        <span className={cx('language')}>{language}</span>
        <span>•</span>
        <span className={cx('mode')}>{mode}</span>
      </p>
    </section>
  );
};
