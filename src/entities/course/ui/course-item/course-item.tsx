import classNames from 'classnames/bind';
import Image from 'next/image';

import { CourseItemData } from '@/entities/course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { ShortInfoPanel } from '@/shared/ui/short-info-panel';
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
        <Subtitle color="black" fontSize="extra-small">
          {title}
        </Subtitle>
        <ShortInfoPanel
          startDate={startDate}
          registrationEndDate={registrationEndDate}
          language={language}
          onlyLanguage={true}
        />
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
