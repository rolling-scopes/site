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
  onlyLanguage?: boolean;
  label?: string;
}

export const ShortInfoPanel = ({
  startDate,
  registrationEndDate,
  language,
  mode,
  withMargin,
  onlyLanguage,
  label,
}: ShortInfoPanelProps) => {
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
          <>
            <span>{LABELS.SHORT_INFO_SEPARATOR}</span>
            <span className={cx('language')} data-testid="course-language">
              {language}
            </span>
          </>
        )}
      </DateSimple>
      {!onlyLanguage && (
        <DateSimple label={LABELS.REGISTER_END} startDate={registrationEndDate}></DateSimple>
      )}
      {!onlyLanguage && (
        <p className={cx('additional-info')}>
          <Image className={cx('icon')} src={micIcon} alt="microphone-icon" />
          <span className={cx('language')} data-testid="course-language">
            {language}
          </span>
          <span>•</span>
          <span className={cx('mode')}>{mode}</span>
        </p>
      )}
    </section>
  );
};
