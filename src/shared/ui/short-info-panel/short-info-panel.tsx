import classNames from 'classnames/bind';
import Image from 'next/image';

import { DateSimple } from '../date-simple';
import micIcon from '@/shared/assets/icons/mic.svg';
import { LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { calculateFreshDate } from '@/shared/helpers/getCourseDate';
import { Language } from '@/shared/types';

import styles from './short-info-panel.module.scss';

const cx = classNames.bind(styles);

export enum ShortInfoPanelView {
  NORMAL = 'normal',
  UPCOMING = 'upcoming',
  MENTORING = 'mentoring',
}

interface ShortInfoPanelProps {
  startDate: string | null;
  registrationEndDate: string | null;
  language: Language;
  withMargin?: boolean;
  label?: string;
  isShortLabel?: boolean;
  personalMentoringStartDate?: string | null;
  personalMentoringEndDate?: string | null;
  showMentoringStartDate?: boolean;
}

export const ShortInfoPanel = ({
  startDate,
  registrationEndDate,
  language,
  withMargin,
  personalMentoringStartDate,
  personalMentoringEndDate,
  label,
  showMentoringStartDate,
}: ShortInfoPanelProps) => {
  const courseLanguage = language === 'en' ? LABELS.COURSE_LANGUAGE_EN : LABELS.COURSE_LANGUAGE_RU;

  let view = ShortInfoPanelView.NORMAL;

  if (showMentoringStartDate) {
    view = ShortInfoPanelView.MENTORING;
  } else if (!label) {
    view = ShortInfoPanelView.UPCOMING;
  }

  const normalView = (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple
        label={label}
        startDate={
          startDate && registrationEndDate
            ? calculateFreshDate(startDate, registrationEndDate)
            : null
        }
      />
      <DateSimple label={LABELS.REGISTRATION_END} startDate={registrationEndDate}></DateSimple>

      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
        <span className={cx('language')} data-testid="course-language">
          {courseLanguage}
        </span>
      </p>
    </section>
  );

  const upcomingView = (
    <DateSimple
      label={label}
      startDate={
        startDate && registrationEndDate ? calculateFreshDate(startDate, registrationEndDate) : null
      }
    >
      <span className={cx('language')} data-testid="course-language">
        {courseLanguage}
      </span>
    </DateSimple>
  );

  const mentoringView = (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple
        label={LABELS.MENTOR_ACTIVITIES}
        startDate={personalMentoringStartDate || TO_BE_DETERMINED}
        endDate={personalMentoringStartDate ? personalMentoringEndDate : null}
        labelSeparator={LABELS.MENTOR_ACTIVITIES_SEPARATOR}
      >
      </DateSimple>
      <p className={cx('additional-info')}>
        <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
        <span className={cx('language')} data-testid="course-language">
          {courseLanguage}
        </span>
      </p>
    </section>
  );

  switch (view) {
    case ShortInfoPanelView.MENTORING:
      return mentoringView;
    case ShortInfoPanelView.UPCOMING:
      return upcomingView;
    default:
      return normalView;
  }
};
