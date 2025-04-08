import { HTMLProps } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import type { Course } from '../../types';
import { LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { DateSimple } from '@/shared/ui/date-simple';
import { LinkCustom } from '@/shared/ui/link-custom';
import { ShortInfoPanel } from '@/shared/ui/short-info-panel';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './course-card.module.scss';

export const cx = classNames.bind(styles);

export type CourseCardProps = Pick<
  Course,
  | 'title'
  | 'iconSrc'
  | 'startDate'
  | 'detailsUrl'
  | 'mode'
  | 'language'
  | 'backgroundStyle'
  | 'registrationEndDate'
  | 'personalMentoringStartDate'
  | 'personalMentoringEndDate'
> &
Pick<HTMLProps<HTMLDivElement>, 'className'> & {
  size?: 'sm' | 'md';
  showMentoringStartDate?: boolean;
};

export const CourseCard = ({
  title,
  iconSrc,
  startDate,
  registrationEndDate,
  detailsUrl,
  language,
  backgroundStyle,
  personalMentoringStartDate,
  personalMentoringEndDate,
  showMentoringStartDate = false,
  className = '',
  size = 'md',
}: CourseCardProps) => {
  const { backgroundColor, accentColor } = backgroundStyle;

  const dateLabel = size === 'sm' ? LABELS.START_DATE_SHORT : LABELS.START_DATE;
  const fontSize = size === 'md' ? 'large' : 'small';

  const classes = {
    [`size-${size}`]: true,
    [className]: true,
  };

  const cardStyle = {
    'backgroundColor': backgroundColor,
    '--accent-bg-color': accentColor,
  };

  return (
    <article className={cx('course-card', classes)} data-testid="course-card">
      <div className={cx('card-header')} style={cardStyle} data-testid="card-header">
        <Image src={iconSrc} alt={title} />
        <Subtitle className={cx('course-title')} fontSize={fontSize}>
          {title}
        </Subtitle>
      </div>
      <div className={cx('course-info')}>
        {!showMentoringStartDate && (
          <ShortInfoPanel
            label={dateLabel}
            startDate={startDate}
            registrationEndDate={registrationEndDate}
            language={language}
          >
          </ShortInfoPanel>
        )}
        {showMentoringStartDate && (
          <div>
            <DateSimple
              label={LABELS.MENTOR_ACTIVITIES}
              startDate={personalMentoringStartDate || TO_BE_DETERMINED}
              endDate={personalMentoringStartDate ? personalMentoringEndDate : null}
              labelSeparator={LABELS.MENTOR_ACTIVITIES_SEPARATOR}
            />
            <ShortInfoPanel
              startDate={null}
              registrationEndDate={null}
              language={language}
              showMentoringStartDate={showMentoringStartDate}
            />
          </div>
        )}
        <LinkCustom
          className={cx('course-link')}
          href={detailsUrl}
          variant="secondary"
          aria-label="View course details"
          data-testid="course-link"
        >
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
