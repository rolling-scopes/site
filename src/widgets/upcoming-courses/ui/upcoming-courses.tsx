import classNames from 'classnames/bind';
import Image from 'next/image';

import { getCourses } from '@/entities/course/api/course-api';
import RSBanner from '@/shared/assets/svg/RsBanner.svg';
import { WidgetTitle } from '@/shared/ui/widget-title';
import CourseItems from '@/widgets/upcoming-courses/ui/course-items';

import styles from './upcoming-courses.module.scss';

const cx = classNames.bind(styles);

export const UpcomingCourses = async () => {
  const courses = await getCourses();

  return (
    <section id="upcoming-courses" className={cx('container')}>
      <div className={cx('content', 'column-2')}>
        <div className={cx('course-wrap')}>
          <WidgetTitle size="small">Upcoming courses</WidgetTitle>
          <div className={cx('course-list')} data-testid="courses-list">
            <CourseItems courses={courses} />
          </div>
        </div>
        <Image
          className={cx('rs-banner')}
          data-testid="rs-banner"
          src={RSBanner}
          alt="The Rolling Scopes organization logo"
        />
      </div>
    </section>
  );
};
