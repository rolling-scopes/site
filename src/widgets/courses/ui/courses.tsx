import classNames from 'classnames/bind';

import { type Course, CourseCard, courseStore } from '@/entities/course';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = async () => {
  const courses = await courseStore.loadCourses();

  const sortParams = {
    data: courses,
    filterStale: false,
  };

  const sortedCourses: Course[] = getActualData(sortParams);

  return (
    <section className={cx('container')} data-testid="all-courses">
      <div className={cx('content', 'courses-content')}>
        <WidgetTitle>All courses</WidgetTitle>
        <div className={cx('courses-list')}>
          {sortedCourses.map((course) => {
            return <CourseCard size="sm" key={course.id} {...course} />;
          })}
        </div>
      </div>
    </section>
  );
};
