import classNames from 'classnames/bind';
import Image from 'next/image';

import { DateSimple } from '../date-simple';
import micIcon from '@/shared/assets/svg/mic.svg';
import { COURSE_LANGUAGE_LABEL, LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { CourseLanguage } from '@/shared/types/types';
import { CourseStartLabel } from '@/shared/ui/short-info-panel/course-start-label';

import styles from './short-info-panel.module.scss';

const cx = classNames.bind(styles);

export type ShortInfoPanelView = 'normal' | 'upcoming' | 'mentoring';

interface ShortInfoPanelProps {
  startDate: string | null;
  registrationEndDate: string | null;
  language: CourseLanguage;
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
  label,
  personalMentoringStartDate,
  personalMentoringEndDate,
  showMentoringStartDate,
}: ShortInfoPanelProps) => {
  const courseLanguage = Array.from(language).map((lang) => COURSE_LANGUAGE_LABEL[lang]).join(', ');

  let view: ShortInfoPanelView = 'normal';

  if (showMentoringStartDate) {
    view = 'mentoring';
  } else if (!label) {
    view = 'upcoming';
  }

  const normalView = (
    <section className={cx('info', { margin: withMargin })}>
      <CourseStartLabel
        label={label}
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        showRegistrationEnd={false}
      />

      <DateSimple
        label={LABELS.REGISTRATION_END}
        startDate={registrationEndDate}
        showMentoringStartDate={false}
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

  const upcomingView = (
    <CourseStartLabel
      label={label}
      startDate={startDate}
      registrationEndDate={startDate ? registrationEndDate : null}
      labelSeparator={LABELS.MENTOR_ACTIVITIES_SEPARATOR}
    >
      <span className={cx('language')} data-testid="course-language">
        {courseLanguage}
      </span>
    </CourseStartLabel>
  );

  const mentoringView = (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple
        label={LABELS.MENTOR_ACTIVITIES}
        startDate={personalMentoringStartDate || TO_BE_DETERMINED}
        endDate={personalMentoringStartDate ? personalMentoringEndDate : null}
        labelSeparator={LABELS.MENTOR_ACTIVITIES_SEPARATOR}
        showMentoringStartDate={true}
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
    case 'mentoring':
      return mentoringView;
    case 'upcoming':
      return upcomingView;
    default:
      return normalView;
  }
};
