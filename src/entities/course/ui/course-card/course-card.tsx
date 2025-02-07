import { HTMLProps } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import type { Course } from '../../types';
import { DateLang } from '@/shared/ui/date-lang';
import { DateSimple } from '@/shared/ui/date-simple';
import { LinkCustom } from '@/shared/ui/link-custom';
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
> & {
  showMentoringStartDate?: boolean;
} & Pick<HTMLProps<HTMLDivElement>, 'className'>;

export const CourseCard = ({
  title,
  iconSrc,
  startDate,
  registrationEndDate,
  detailsUrl,
  mode,
  language,
  backgroundStyle,
  className,
  personalMentoringStartDate,
  personalMentoringEndDate,
  showMentoringStartDate = false,
}: CourseCardProps) => {
  const { backgroundColor, accentColor } = backgroundStyle;

  const cardStyle = {
    'backgroundColor': backgroundColor,
    '--accent-bg-color': accentColor,
  };

  return (
    <article className={cx('course-card', className)} data-testid="course-card">
      <div className={cx('card-header')} style={cardStyle} data-testid="card-header">
        <Image src={iconSrc} alt={title} />
        <Subtitle fontSize="small">{title}</Subtitle>
      </div>
      <div className={cx('course-info')}>
        {!showMentoringStartDate && (
          <DateLang
            startDate={startDate}
            registrationEndDate={registrationEndDate}
            language={language}
            mode={mode}
          />
        )}
        {showMentoringStartDate && (
          <DateSimple
            label="Mentorship:"
            labelSeparator={personalMentoringStartDate ? '-' : 'TBD'}
            startDate={personalMentoringStartDate}
            endDate={personalMentoringEndDate}
          />)}
        <LinkCustom
          href={detailsUrl}
          variant="rounded"
          aria-label="View course details"
          data-testid="course-link"
        >
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
