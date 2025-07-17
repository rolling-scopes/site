import classNames from 'classnames/bind';

import { courseStore } from '@/entities/course';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseItemsFresh } from '@/widgets/courses/ui/course-items-fresh';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

export const Courses = async () => {
  const courses = await courseStore.loadCourses();

  return (
    <section className={cx('container')} data-testid="all-courses">
      <div className={cx('content', 'courses-content')}>
        <WidgetTitle>All courses</WidgetTitle>
        <div className={cx('courses-list')}>
          <CourseItemsFresh courses={courses} />
        </div>
      </div>
    </section>
  );
};
