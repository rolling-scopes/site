import classNames from 'classnames/bind';
import Image from 'next/image';

import { CourseItemData } from '@/entities/course';
import { DateStart } from '@/shared/ui/date-start';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

import styles from './course-item.module.scss';

const cx = classNames.bind(styles);

export const CourseItem = ({
  title,
  language,
  startDate,
  registrationEndDate,
  detailsUrl,
  iconSrc,
}: CourseItemData) => {
  return (
    <section className={cx('course-item')}>
      <figure className={cx('icon-container')}>
        <Image
          className={cx('course-icon')}
          src={iconSrc}
          alt=""
          aria-hidden="true"
          data-testid="course-image"
        />
      </figure>
      <article className={cx('course-info')}>
        <Subtitle fontSize="extra-small">
          {title}
        </Subtitle>
        <p className={cx('date')}>
          <DateStart
            courseStartDate={startDate}
            registrationEndDate={registrationEndDate}
            data-testid="course-date"
          />
          <span data-testid="course-language">{` • ${language.toUpperCase()}`}</span>
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
