import classNames from 'classnames/bind';
import Image from 'next/image';
import { ROUTES } from '@/core/const';
import type { Course } from '@/entities/course';
import { getCourses } from '@/entities/course/api/course-api';
import { CourseItem } from '@/entities/course/ui/course-item/course-item';
import RSBanner from '@/shared/assets/svg/RsBanner.svg';
import { getActualData } from '@/shared/helpers/getActualData';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { maxUpcomingCoursesQuantity } from '@/widgets/upcoming-courses/constants';

import styles from './upcoming-courses.module.scss';

const cx = classNames.bind(styles);

export const UpcomingCourses = async () => {
  const courses = await getCourses();
  const coursesData: Course[] = getActualData({
    data: courses,
    filterStale: true,
  });

  const coursesContent = coursesData
    .slice(0, Math.min(coursesData.length, maxUpcomingCoursesQuantity))
    .map(({ title, language, startDate, registrationEndDate, detailsUrl, iconSrc }) => {
      return (
        <CourseItem
          title={title}
          language={language}
          startDate={startDate}
          registrationEndDate={registrationEndDate}
          detailsUrl={detailsUrl}
          iconSrc={iconSrc}
          key={title}
        />
      );
    });

  return (
    <article id="upcoming-courses" className={cx('container')}>
      <section className={cx('content')}>
        <WidgetTitle size="small">Upcoming courses</WidgetTitle>
        <div className={cx('column-2')}>
          <div className={cx('course-list')} data-testid="courses-list">
            {coursesContent}
            <LinkCustom href={ROUTES.COURSES} variant="primary">
              Go to courses
            </LinkCustom>
          </div>
          <Image
            className={cx('rs-banner')}
            data-testid="rs-banner"
            src={RSBanner}
            alt="The Rolling Scopes organization logo"
          />
        </div>
      </section>
    </article>
  );
};
