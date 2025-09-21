import classNames from 'classnames/bind';

import { Course } from '@/entities/course';
import {
  CourseItemsFresh,
} from '@/widgets/external-embed-content/ui/mentorship-courses/course-items-fresh';

import styles from './mentorship-courses.module.scss';

const cx = classNames.bind(styles);

type MentorshipCoursesProps = {
  courses: Course[];
};

export const MentorshipCourses = ({ courses }: MentorshipCoursesProps) => {
  return (
    <div className={cx('mentorship-courses')}>
      <div className={cx('courses-list')}>
        <CourseItemsFresh courses={courses} className={cx('mentorship-course-card')} />
      </div>
    </div>
  );
};
