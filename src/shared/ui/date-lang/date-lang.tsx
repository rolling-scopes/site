import classNames from 'classnames/bind';
import Image from 'next/image';

import { DateSimple } from '../date-simple';
import micIcon from '@/shared/assets/icons/mic.svg';
import { calculateFreshDate } from '@/shared/helpers/getCourseDate';
import { Language } from '@/shared/types';

import styles from './date-lang.module.scss';

const cx = classNames.bind(styles);

interface DateLangProps {
  startDate: string;
  registrationEndDate: string;
  mode?: string;
  language: Language;
  withMargin?: boolean;
  onlyLanguage?: boolean;
  label?: string | null;
}

export const DateLang = ({
  startDate,
  registrationEndDate,
  language,
  mode,
  withMargin,
  onlyLanguage,
  label = 'Start:',
}: DateLangProps) => {
  return (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple label={label} startDate={calculateFreshDate(startDate, registrationEndDate)}>
        {onlyLanguage && (
          <>
            <span>•</span>
            <span className={cx('language')} data-testid="course-language">{language}</span>
          </>
        )}
      </DateSimple>
      {!onlyLanguage && (
        <p className={cx('additional-info')}>
          <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
          <span className={cx('language')} data-testid="course-language">{language}</span>
          <span>•</span>
          <span className={cx('mode')}>{mode}</span>
        </p>
      )}
    </section>
  );
};
