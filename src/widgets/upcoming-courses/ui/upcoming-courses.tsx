import classNames from 'classnames/bind';
import Image from 'next/image';

import { Course, courseStore } from '@/entities/course';
import { CourseItem } from '@/entities/course/ui/course-item/course-item';
import RSBanner from '@/shared/assets/svg/RsBanner.svg';
import { ROUTES } from '@/shared/constants';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { maxUpcomingCoursesQuantity } from '@/widgets/upcoming-courses/constants';
import { ANNOUNCEMENT_TELEGRAM_LINK } from 'data';

import styles from './upcoming-courses.module.scss';

const cx = classNames.bind(styles);

const emptyText = {
  part1: `Looks like the course board is empty right now. But don't worry — we're cooking up something exciting! Subscribe to our `,
  part2: ` Announcement channel to be the first to know when fresh courses are served.`,
};

export const UpcomingCourses = async () => {
  const courses = await courseStore.loadCourses();
  const coursesData: Course[] = getActualData({
    data: courses,
    filterStale: true,
  });

  const coursesContent = coursesData
    .slice(0, Math.min(coursesData.length, maxUpcomingCoursesQuantity))
    .map(({ title, language, startDate, registrationEndDate, detailsUrl, iconSrc }) => {
      return (
        <CourseItem
          title={title}
          language={language}
          startDate={startDate}
          registrationEndDate={registrationEndDate}
          detailsUrl={detailsUrl}
          iconSrc={iconSrc}
          key={title}
        />
      );
    });

  const courseListBlock = (
    <>
      {coursesContent}
      <LinkCustom href={ROUTES.COURSES} variant="primary">
        Go to courses
      </LinkCustom>
    </>
  );
  const emptyBlock = (
    <Paragraph>
      {emptyText.part1}
      <LinkCustom href={ANNOUNCEMENT_TELEGRAM_LINK} external>
        Telegram
      </LinkCustom>
      {emptyText.part2}
    </Paragraph>
  );

  return (
    <section id="upcoming-courses" className={cx('container')}>
      <div className={cx('content', 'column-2')}>
        <div className={cx('course-wrap')}>
          <WidgetTitle size="small">Upcoming courses</WidgetTitle>
          <div className={cx('course-list')} data-testid="courses-list">
            {coursesContent.length > 0 ? courseListBlock : emptyBlock}
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
