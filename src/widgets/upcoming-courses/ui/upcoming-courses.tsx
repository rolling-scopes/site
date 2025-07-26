import classNames from 'classnames/bind';
import Image from 'next/image';

import { Course } from '@/entities/course';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { UpcomingCoursesSectionData } from '@/widgets/upcoming-courses/types';
import { CourseItems } from '@/widgets/upcoming-courses/ui/course-items';

import styles from './upcoming-courses.module.scss';

const cx = classNames.bind(styles);

type UpcomingCoursesProps = UpcomingCoursesSectionData & {
  courses: Course[];
};

export const UpcomingCourses = ({
  title,
  imageSrc,
  linkUrl,
  linkLabel,
  courses,
}: UpcomingCoursesProps) => {
  return (
    <section id="upcoming-courses" className={cx('container')}>
      <div className={cx('content', 'column-2')}>
        <div className={cx('course-wrap')}>
          <WidgetTitle size="small">{title}</WidgetTitle>

          <div className={cx('course-list')} data-testid="courses-list">
            <CourseItems linkUrl={linkUrl} linkLabel={linkLabel} courses={courses} />
          </div>
        </div>

        {imageSrc && (
          <Image
            className={cx('rs-banner')}
            data-testid="rs-banner"
            src={imageSrc}
            alt=""
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
};
