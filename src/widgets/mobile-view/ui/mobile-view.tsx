import classNames from 'classnames/bind';
import Link from 'next/link';
import { COURSE_STALE_AFTER_DAYS, ROUTES } from '@/core/const';
import { getCourseDate } from '@/shared/helpers/getCourseDate.ts';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';
import { communityMenuStaticLinks, courses, mentorshipCourses, schoolMenuStaticLinks } from 'data';

import styles from './mobile-view.module.scss';

const cx = classNames.bind(styles);

type DividerProps = {
  color: 'light' | 'dark';
};

const Divider = ({ color }: DividerProps) => <hr className={cx('divider', color)} />;

type MobileViewProps = {
  type: 'header' | 'footer';
};

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  return (
    <nav className={cx('mobile-view')} data-testid="mobile-view">
      <Logo type={logoView} />

      <Divider color={color} />

      <Link href={`/${ROUTES.HOME}`} className={cx('category-link', color)}>
        RS School
      </Link>

      <SchoolMenu>
        {schoolMenuStaticLinks.map((link, i) => (
          <SchoolMenu.Item
            key={i}
            title={link.title}
            description={link.description}
            url={link.detailsUrl}
            color={color}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link href={`/${ROUTES.COURSES}`} className={cx('category-link', color)}>
        Courses
      </Link>

      <SchoolMenu>
        {courses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            icon={course.iconSmall}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            url={course.detailsUrl}
            color={color}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link href={`/${ROUTES.COMMUNITY}`} className={cx('category-link', color)}>
        Community
      </Link>

      <SchoolMenu>
        {communityMenuStaticLinks.map((link, i) => (
          <SchoolMenu.Item
            key={i}
            title={link.title}
            description={link.description}
            url={link.detailsUrl}
            color={color}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link href={`/${ROUTES.MENTORSHIP}`} className={cx('category-link', color)}>
        Mentorship
      </Link>

      <SchoolMenu>
        {mentorshipCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            icon={course.iconSmall}
            title={course.title}
            url={course.detailsUrl}
            color={color}
          />
        ))}
      </SchoolMenu>
    </nav>
  );
};
