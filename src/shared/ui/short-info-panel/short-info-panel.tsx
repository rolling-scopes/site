import classNames from 'classnames/bind';
import Image from 'next/image';

import { DateSimple } from '../date-simple';
import micIcon from '@/shared/assets/icons/mic.svg';
import { LABELS } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/get-course-date';
import { Language } from '@/shared/types';

import styles from './short-info-panel.module.scss';

const cx = classNames.bind(styles);

interface ShortInfoPanelProps {
  startDate: string | null;
  registrationEndDate: string | null;
  mode?: string;
  language: Language;
  withMargin?: boolean;
  onlyLanguage?: boolean;
  label?: string;
  isShortLabel?: boolean;
}

export const ShortInfoPanel = ({
  startDate,
  registrationEndDate,
  language,
  withMargin,
  onlyLanguage,
  label,
}: ShortInfoPanelProps) => {
  const courseLanguage = language === 'en' ? LABELS.COURSE_LANGUAGE_EN : LABELS.COURSE_LANGUAGE_RU;

  return (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple
        label={label}
        startDate={
          startDate && registrationEndDate
            ? calculateFreshDate(startDate, registrationEndDate)
            : null
        }
      >
        {onlyLanguage && (
          <span className={cx('language')} data-testid="course-language">
            {courseLanguage}
          </span>
        )}
      </DateSimple>
      {!onlyLanguage && (
        <p className={cx('additional-info')}>
          <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
          <span className={cx('language')} data-testid="course-language">
            {courseLanguage}
          </span>
        </p>
      )}
    </section>
  );
};
