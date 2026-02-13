'use client';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { DateSimple } from '../date-simple';
import {
  COURSE_DATE_FORMAT,
  COURSE_DATE_FORMAT_SHORT,
  MENTORING_DATE_FORMAT,
} from '@/entities/course/constants';
import micIcon from '@/shared/assets/svg/mic.svg';
import { COURSE_LANGUAGE_LABEL, LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';
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
  const params = useParams();
  const lang = (params?.lang as ApiResourceLocale) ?? 'en-US';
  const courseLanguage = Array.from(language)
    .map((lang) => COURSE_LANGUAGE_LABEL[lang])
    .join(', ');

  let view: ShortInfoPanelView = 'normal';

  if (showMentoringStartDate) {
    view = 'mentoring';
  } else if (!label) {
    view = 'upcoming';
  }

  const normalView = (
    <section className={cx('info', { margin: withMargin })}>
      <CourseStartLabel
        lang={lang}
        startDateFormat={COURSE_DATE_FORMAT}
        endDateFormat={COURSE_DATE_FORMAT}
        label={label}
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        showRegistrationEnd={false}
      />

      <DateSimple
        lang={lang}
        startDateFormat={COURSE_DATE_FORMAT}
        endDateFormat={COURSE_DATE_FORMAT}
        label={LABELS[lang].REGISTRATION_END}
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
      lang={lang}
      startDateFormat={COURSE_DATE_FORMAT_SHORT}
      endDateFormat={COURSE_DATE_FORMAT}
      label={label}
      startDate={startDate}
      registrationEndDate={startDate ? registrationEndDate : null}
      labelSeparator={LABELS[lang].MENTOR_ACTIVITIES_SEPARATOR}
    >
      <span className={cx('language')} data-testid="course-language">
        {courseLanguage}
      </span>
    </CourseStartLabel>
  );

  const mentoringView = (
    <section className={cx('info', { margin: withMargin })}>
      <DateSimple
        lang={lang}
        startDateFormat={MENTORING_DATE_FORMAT}
        endDateFormat={MENTORING_DATE_FORMAT}
        label={LABELS[lang].MENTOR_ACTIVITIES}
        startDate={personalMentoringStartDate || TO_BE_DETERMINED}
        endDate={personalMentoringStartDate ? personalMentoringEndDate : null}
        labelSeparator={LABELS[lang].MENTOR_ACTIVITIES_SEPARATOR}
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
