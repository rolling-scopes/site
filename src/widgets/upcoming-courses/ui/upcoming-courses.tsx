import classNames from 'classnames/bind';

import { Course } from '@/entities/course';
import { CourseItems } from '@/widgets/upcoming-courses/ui/course-items';

import styles from './upcoming-courses.module.scss';

const cx = classNames.bind(styles);

type UpcomingCoursesProps = {
  courses: Course[];
};

export const UpcomingCourses = ({ courses }: UpcomingCoursesProps) => {
  return (
    <div className={cx('course-wrap')}>
      <div className={cx('course-list')} data-testid="courses-list">
        <CourseItems courses={courses} />
      </div>
    </div>
  );
};
