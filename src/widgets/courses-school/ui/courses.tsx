import classNames from 'classnames/bind';
import { CourseCard } from './CourseCard';
import { MAX_COURSE_COUNT } from '../model/constants';
import { COURSE_STALE_AFTER_DAYS, ROUTES } from '@/app/const';
import { Course } from '@/app/types';
import { getActualData } from '@/shared/helpers/getActualData';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { ArrowIcon, RsBanner } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { courses } from 'data';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = () => {
  const size = useWindowSize();
  const laptopScreenBreakPoint = 1440;
  const tabletScreenBreakPoint = 810;
  const coursesData: Course[] = getActualData({
    data: courses,
    staleAfter: COURSE_STALE_AFTER_DAYS,
    filterStale: true,
  });

  let linkLabel = 'More details';

  if (size.width <= tabletScreenBreakPoint) {
    linkLabel = '';
  } else if (size.width <= laptopScreenBreakPoint) {
    linkLabel = 'More';
  }

  const coursesContent = coursesData
    .slice(0, Math.min(coursesData.length, MAX_COURSE_COUNT))
    .map(({ title, language, startDate, detailsUrl, iconSrc }) => {
      return (
        <CourseCard
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
            <LinkCustom href={ROUTES.COURSES} icon={<ArrowIcon />} variant="primary">
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
