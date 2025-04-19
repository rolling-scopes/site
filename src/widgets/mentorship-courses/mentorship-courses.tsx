import classNames from 'classnames/bind';

import { getCourses } from '@/entities/course/api/course-api';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseItemsFresh } from '@/widgets/mentorship-courses/course-items-fresh';

import styles from './mentorship-courses.module.scss';

const cx = classNames.bind(styles);

export const MentorshipCourses = async () => {
  const courses = await getCourses();

  return (
    <section className={cx('mentorship-courses', 'container')}>
      <div className={cx('content')}>
        <WidgetTitle>Courses That Need Mentors</WidgetTitle>
        <div className={cx('courses-list')}>
          <CourseItemsFresh courses={courses} className={cx('mentorship-course-card')} />
        </div>
      </div>
    </section>
  );
};
