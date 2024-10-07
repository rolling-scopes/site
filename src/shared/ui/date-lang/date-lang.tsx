import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { Image } from '@/shared/ui/image';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

interface DateLangProps {
  startDate: string;
  mode: string;
  language: string[];
  withMargin?: boolean;
}

export const DateLang = ({ startDate, language, mode, withMargin }: DateLangProps) => {
  const dateAttr = dayjs(startDate).format('YYYY-MM-DD');

  return (
    <section className={cx('info', { margin: withMargin })}>
      <p className={cx('date')}>
        <Image className={cx('icon')} img={noteIcon} alt="note-icon" lazy={false} />
        <span>Start:</span>
        <time dateTime={dateAttr}>{startDate}</time>
      </p>
      <p className={cx('additional-info')}>
        <Image className={cx('icon')} img={micIcon} alt="microphone-icon" lazy={false} />
        <span className={cx('language')}>{language}</span>
        <span>•</span>
        <span className={cx('mode')}>{mode}</span>
      </p>
    </section>
  );
};
