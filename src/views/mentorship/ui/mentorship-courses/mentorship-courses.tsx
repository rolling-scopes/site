import classNames from 'classnames/bind';
import { CourseCard } from '@/entities/course';
import { getCourses } from '@/entities/course/api/course-api';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transformCoursesToMentorship';

import styles from './mentorship-courses.module.scss';

const cx = classNames.bind(styles);

export const MentorshipCourses = async () => {
  const coursesWithMentorship = transformCoursesToMentorship(await getCourses());

  return (
    <section className={cx('mentorship-courses', 'container')}>
      <div className={cx('content')}>
        <WidgetTitle>Courses That Need Mentors</WidgetTitle>
        <div className={cx('courses-list')}>
          {coursesWithMentorship.map((course) => (
            <CourseCard key={course.id} className={cx('mentorship-course-card')} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
