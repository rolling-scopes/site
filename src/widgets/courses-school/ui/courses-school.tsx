import classNames from 'classnames/bind';
import { COURSE_STALE_AFTER_DAYS, ROUTES } from '@/app/const';
import type { Course } from '@/entities/course';
import { CourseItem } from '@/entities/course';
import RSBanner from '@/shared/assets/svg/RsBanner.svg';
import { getActualData } from '@/shared/helpers/getActualData';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { maxCourseCount, tabletScreenBreakPoint } from '@/widgets/courses-school/constants.ts';
import { courses } from 'data';

import styles from './courses-school.module.scss';

const cx = classNames.bind(styles);

export const CoursesSchool = () => {
  const size = useWindowSize();
  const coursesData: Course[] = getActualData({
    data: courses,
    staleAfter: COURSE_STALE_AFTER_DAYS,
    filterStale: true,
  });

  let linkLabel = 'More details';

  if (size.width <= tabletScreenBreakPoint) {
    linkLabel = '';
  }

  const coursesContent = coursesData
    .slice(0, Math.min(coursesData.length, maxCourseCount))
    .map(({ title, language, startDate, detailsUrl, iconSrc }) => {
      return (
        <CourseItem
          title={title}
          language={language}
          startDate={startDate}
          detailsUrl={detailsUrl}
          iconSrc={iconSrc}
          buttonText={linkLabel}
          key={title}
        />
      );
    });

  return (
    <article id="upcoming-courses" className={cx('container')}>
      <section className={cx('content')}>
        <WidgetTitle size="small" className={cx('course-title')}>
          Upcoming courses
        </WidgetTitle>
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
