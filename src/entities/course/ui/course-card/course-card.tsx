import { HTMLProps } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import type { Course } from '../../types';
import { DateLang } from '@/shared/ui/date-lang';
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
> & Pick<HTMLProps<HTMLDivElement>, 'className'>;

export const CourseCard = ({
  title,
  iconSrc,
  startDate,
  registrationEndDate,
  detailsUrl,
  language,
  backgroundStyle,
  className,
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
        <Subtitle className={cx('course-title')} fontSize="large">{title}</Subtitle>
      </div>
      <div className={cx('course-info')}>
        <DateLang
          startDate={startDate}
          registrationEndDate={registrationEndDate}
          language={language}
        />
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
