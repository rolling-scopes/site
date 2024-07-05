import classNames from 'classnames/bind';
import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { dayJS } from '@/app/services/dayjs';
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
  const dateAttr = dayJS(startDate).format('YYYY-MM-DD');
  const dateContent = getCourseDate(startDate, COURSE_STALE_AFTER_DAYS);

  return (
    <section className={cx('info')}>
      <p className={cx('date')}>
        <Image className={cx('icon')} src={noteIcon} alt="note-icon" lazy="false" />
        <span>Start date:</span>
        <time dateTime={dateAttr}>{dateContent}</time>
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
