import classNames from 'classnames/bind';

import { CourseItemsFresh } from '../courses/course-items-fresh';
import { Course } from '@/entities/course';

import styles from './courses.module.scss';

const cx = classNames.bind(styles);

type CoursesProps = {
  courses: Course[];
};

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <div className={cx('courses-list')} data-testid="all-courses">
      <CourseItemsFresh courses={courses} />
    </div>
  );
};
