/* eslint-disable @stylistic/jsx-one-expression-per-line */
import classNames from 'classnames/bind';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import Image from '@/shared/ui/image';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

interface DateLangProps {
  startDate: string;
  mode: string;
  language: string[];
  type?: string;
}

export const DateLang = ({ startDate, language, mode, type = '' }: DateLangProps) => {
  const splittedLanguage = language.slice().join('/');

  return (
    <div className={cx('info', type)}>
      <p className={cx('date')}>
        <Image className={cx('icon')} src={noteIcon} alt="note-icon" lazy="false" />
        <span>Start date {startDate ?? 'Not set'}</span>
      </p>
      <p className={cx('other')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone icon" lazy="false" />
        <span className={cx('language')}>{splittedLanguage}</span>
        <span className={cx('mode')}> • {mode}</span>
      </p>
    </div>
  );
};
