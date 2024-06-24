import classNames from 'classnames/bind';
import { CourseCard } from './CourseCard';
import { selectCourses } from '../lib/selectCourses';
import { ROUTES } from '@/app/const';

import { courses } from '@/app/services/data';
import { useWindowSize } from '@/shared/hooks/use-window-size';
import { ArrowIcon, RsBanner } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = () => {
  const size = useWindowSize();
  const laptopScreenBreakPoint = 1440;
  const tabletScreenBreakPoint = 810;
  const coursesData = selectCourses(courses);

  let linkLabel = 'More details';

  if (size.width <= tabletScreenBreakPoint) {
    linkLabel = '';
  } else if (size.width <= laptopScreenBreakPoint) {
    linkLabel = 'More';
  }

  const coursesContent = coursesData?.map(({ title, language, startDate, detailsUrl, iconSrc }) => {
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
        <h4 className={cx('course-title')}>Upcoming courses</h4>
        <div className={cx('column-2')}>
          <div className={cx('course-list')} data-testid="courses-list">
            {coursesContent}
            <LinkCustom href={ROUTES.COURSES} icon={<ArrowIcon />} variant="colored" button>
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
