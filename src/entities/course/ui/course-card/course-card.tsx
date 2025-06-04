import { HTMLProps } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import type { Course } from '../../types';
import { LABELS } from '@/shared/constants';
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
  showMentoringStartDate,
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
        <Subtitle className={cx('course-title')} size={fontSize}>
          {title}
        </Subtitle>
      </div>
      <div className={cx('course-info')}>
        <ShortInfoPanel
          showMentoringStartDate={showMentoringStartDate}
          label={dateLabel}
          startDate={startDate}
          registrationEndDate={registrationEndDate}
          language={language}
          personalMentoringStartDate={personalMentoringStartDate}
          personalMentoringEndDate={personalMentoringEndDate}
        >
        </ShortInfoPanel>

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
