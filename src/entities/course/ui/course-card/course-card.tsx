import classNames from 'classnames/bind';
import type { Course } from '../../types';
import { ArrowIcon } from '@/shared/icons';
import { DateLang } from '@/shared/ui/date-lang';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';

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
        { /* TODO change <h3> to Subtitle */ }
        <h3 className={cx('card-title')}>{title}</h3>
      </div>
      <div className={cx('course-info')}>
        <DateLang startDate={startDate} language={language} mode={mode} />
        <LinkCustom
          href={detailsUrl}
          icon={<ArrowIcon size="16px" />}
          variant="rounded"
          aria-label="View course details"
        >
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
