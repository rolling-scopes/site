import classNames from 'classnames/bind';

import { CourseCard, courseStore } from '@/entities/course';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transform-courses-to-mentorship';

import styles from './mentorship-courses.module.scss';

const cx = classNames.bind(styles);

export const MentorshipCourses = async () => {
  const coursesWithMentorship = transformCoursesToMentorship(await courseStore.loadCourses());

  return (
    <section className={cx('mentorship-courses', 'container')}>
      <div className={cx('content')}>
        <WidgetTitle>Courses That Need Mentors</WidgetTitle>
        <div className={cx('courses-list')}>
          {coursesWithMentorship.map((course) => (
            <CourseCard
              key={course.id}
              className={cx('mentorship-course-card')}
              {...course}
              showMentoringStartDate={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
