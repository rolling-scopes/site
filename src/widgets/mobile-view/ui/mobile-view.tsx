import classNames from 'classnames/bind';
import Link from 'next/link';

import { Course } from '@/entities/course';
import { ANCHORS, ROUTES } from '@/shared/constants';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';
import { communityMenuStaticLinks, mentorshipCourses, schoolMenuStaticLinks } from 'data';

import styles from './mobile-view.module.scss';

const cx = classNames.bind(styles);

type DividerProps = {
  color: 'light' | 'dark';
};

const Divider = ({ color }: DividerProps) => <hr className={cx('divider', color)} />;

type MobileViewProps = {
  type: 'header' | 'footer';
  courses: Course[];
  onClose?: () => void;
};

export const MobileView = ({ type, courses, onClose }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';
  const courseIcon = type === 'header' ? 'iconSmall' : 'iconFooter';

  return (
    <nav className={cx('mobile-view')} data-testid="mobile-view">
      <Logo type={logoView} />

      <Divider color={color} />

      <Link onClick={onClose} href={ROUTES.HOME} className={cx('category-link', color)}>
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
            onClick={onClose}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link onClick={onClose} href={`/${ROUTES.COURSES}`} className={cx('category-link', color)}>
        Courses
      </Link>

      <SchoolMenu>
        {courses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            icon={course[courseIcon]}
            title={course.title}
            description={course.startDate}
            url={course.detailsUrl}
            color={color}
            onClick={onClose}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link onClick={onClose} href={`/${ROUTES.COMMUNITY}`} className={cx('category-link', color)}>
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
            onClick={onClose}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link onClick={onClose} href={`/${ROUTES.MENTORSHIP}`} className={cx('category-link', color)}>
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
            onClick={onClose}
          />
        ))}
      </SchoolMenu>

      <Divider color={color} />

      <Link onClick={onClose} href={`/#${ANCHORS.DONATE}`} className={cx('category-link', color)}>
        Donate
      </Link>

      <Divider color={color} />

      <Link onClick={onClose} href={`/${ROUTES.DOCS_EN}`} className={cx('category-link', color)}>
        Docs
      </Link>
    </nav>
  );
};
