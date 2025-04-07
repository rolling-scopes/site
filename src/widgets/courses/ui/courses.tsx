import classNames from 'classnames/bind';

import { getCourses } from '@/entities/course/api/course-api';
import { WidgetTitle } from '@/shared/ui/widget-title';
import CourseItems from '@/widgets/courses/ui/course-items';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = async () => {
  const courses = await getCourses();

  return (
    <section className={cx('container')} data-testid="all-courses">
      <div className={cx('content', 'courses-content')}>
        <WidgetTitle>All courses</WidgetTitle>
        <div className={cx('courses-list')}>
          <CourseItems courses={courses} />
        </div>
      </div>
    </section>
  );
};
