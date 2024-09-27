import classNames from 'classnames/bind';
import { MAX_COURSE_COUNT } from '../model/constants';
import { COURSE_STALE_AFTER_DAYS, ROUTES } from '@/app/const';
import type { Course } from '@/entities/course';
import { CourseItem } from '@/entities/course/ui/course-item/course-item.tsx';
import { getActualData } from '@/shared/helpers/getActualData';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { RsBanner } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { tabletScreenBreakPoint } from '@/widgets/courses-school/constants.ts';
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
    .slice(0, Math.min(coursesData.length, MAX_COURSE_COUNT))
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
          <figure className={cx('image')}>
            <RsBanner />
          </figure>
        </div>
      </section>
    </article>
  );
};
