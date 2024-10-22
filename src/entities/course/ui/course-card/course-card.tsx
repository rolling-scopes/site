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
  'title' | 'iconSrc' | 'startDate' | 'detailsUrl' | 'mode' | 'language' | 'backgroundStyle'
>;

export const CourseCard = ({
  title,
  iconSrc,
  startDate,
  detailsUrl,
  mode,
  language,
  backgroundStyle,
}: CourseCardProps) => {
  const { backgroundColor, accentColor } = backgroundStyle;

  const cardStyle = {
    backgroundColor: backgroundColor,
    '--accent-bg-color': accentColor,
  };

  return (
    <article className={cx('course-card')} data-testid="course-card">
      <div className={cx('card-header')} style={cardStyle}>
        <Image src={iconSrc} alt={title} />
        <Subtitle fontSize="small">{title}</Subtitle>
      </div>
      <div className={cx('course-info')}>
        <DateLang startDate={startDate} language={language} mode={mode} />
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
