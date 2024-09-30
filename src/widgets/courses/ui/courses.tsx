import classNames from 'classnames/bind';
import { path } from '../constants';
import { COURSE_STALE_AFTER_DAYS } from '@/app/const';
import { type Course, CourseCard } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import { isCourse } from '@/shared/helpers/is-course';
import { useDataByName } from '@/shared/hooks/use-data-by-name';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = () => {
  const { data: courses, loading, error } = useDataByName(path);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  if (!courses || courses.length === 0) {
    return null;
  }

  const sortParams = {
    data: courses.filter(isCourse),
    staleAfter: COURSE_STALE_AFTER_DAYS,
    filterStale: false,
  };

  const sortedCourses: Course[] = getActualData(sortParams);

  return (
    <section className={cx('container')} data-testid="all-courses">
      <div className={cx('content', 'courses-content')}>
        <WidgetTitle>All courses</WidgetTitle>
        <div className={cx('courses-list')}>
          {sortedCourses.map((course) => {
            return <CourseCard key={course.id} {...course} />;
          })}
        </div>
      </div>
    </section>
  );
};
