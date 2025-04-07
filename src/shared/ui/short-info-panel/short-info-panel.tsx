import classNames from 'classnames/bind';
import Image from 'next/image';

import { DateSimple } from '../date-simple';
import micIcon from '@/shared/assets/icons/mic.svg';
import { LABELS } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/getCourseDate';
import { Language } from '@/shared/types';

import styles from './short-info-panel.module.scss';

const cx = classNames.bind(styles);

interface ShortInfoPanelProps {
  startDate: string | null;
  registrationEndDate: string | null;
  mode?: string;
  language: Language;
  withMargin?: boolean;
  isCompactView?: boolean;

  label?: string;
  isShortLabel?: boolean;
}

export const ShortInfoPanel = ({
  startDate,
  registrationEndDate,
  language,
  withMargin,
  isCompactView,
  label,
}: ShortInfoPanelProps) => {
  const courseLanguage = language === 'en' ? LABELS.COURSE_LANGUAGE_EN : LABELS.COURSE_LANGUAGE_RU;

  isCompactView = label ? false : true;
  const normalView = (
    <>
      <DateSimple
        label={label}
        startDate={
          startDate && registrationEndDate
            ? calculateFreshDate(startDate, registrationEndDate)
            : null
        }
      >
      </DateSimple>

      <DateSimple label={LABELS.REGISTERATION_END} startDate={registrationEndDate}></DateSimple>

      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
        <span className={cx('language')} data-testid="course-language">
          {courseLanguage}
        </span>
      </p>
    </>
  );
  const compactView = (
    <DateSimple
      startDate={
        startDate && registrationEndDate ? calculateFreshDate(startDate, registrationEndDate) : null
      }
    >
      <span className={cx('language')} data-testid="course-language">
        {courseLanguage}
      </span>
    </DateSimple>
  );

  return (
    <section className={cx('info', { margin: withMargin })}>
      {isCompactView ? compactView : normalView}
    </section>
  );
};
