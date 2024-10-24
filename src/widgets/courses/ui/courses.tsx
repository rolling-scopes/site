import classNames from 'classnames/bind';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { type Course, CourseCard } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import { isCourse } from '@/shared/helpers/is-course';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

type CoursesProps = {
  courses: Course[];
};
export const Courses = ({ courses }: CoursesProps) => {
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
