import classNames from 'classnames/bind';
import type { Course } from '@/entities/course';
import { Image } from '@/shared/ui/image';
import { ImageType } from '@/shared/ui/image/image';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

type addFields = {
  buttonText: string;
  iconSrc: ImageType;
};

type PropsType = Pick<Course, 'title' | 'language' | 'startDate' | 'detailsUrl'> & addFields;

export const CourseCard = ({
  title,
  language,
  startDate,
  detailsUrl,
  buttonText,
  iconSrc,
}: PropsType) => {
  return (
    <section className={cx('course-card')}>
      <figure className={cx('icon-container')}>
        <Image img={iconSrc} alt={title} />
      </figure>
      <div className={cx('course-info')}>
        <p className={cx('name')}>{title}</p>
        <p className={cx('date')}>{`${startDate} • ${language[0].toUpperCase()}`}</p>
      </div>
      <div className={cx('details-container')}>
        <LinkCustom href={detailsUrl} variant="rounded" aria-label="More details">
          {buttonText}
        </LinkCustom>
      </div>
    </section>
  );
};

export default CourseCard;
