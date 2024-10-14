import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { CourseItemData } from '@/entities/course';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './course-item.module.scss';

const cx = classNames.bind(styles);

export const CourseItem = ({ title, language, startDate, detailsUrl, iconSrc }: CourseItemData) => {
  const dateTime = dayjs(startDate).toISOString();

  return (
    <section className={cx('course-item')}>
      <figure className={cx('icon-container')}>
        <Image
          className={cx('course-icon')}
          img={iconSrc}
          alt=""
          aria-hidden="true"
          data-testid="course-image"
        />
      </figure>
      <article className={cx('course-info')}>
        <Subtitle color="black" fontSize="extra-small">
          {title}
        </Subtitle>
        <p className={cx('date')}>
          <time dateTime={dateTime} data-testid="course-date">
            {startDate}
          </time>
          <span data-testid="course-language">{` • ${language[0].toUpperCase()}`}</span>
        </p>
      </article>
      <LinkCustom
        className={cx('details-link')}
        href={detailsUrl}
        variant="rounded"
        aria-label="More details"
        data-testid="course-link"
      />
    </section>
  );
};
