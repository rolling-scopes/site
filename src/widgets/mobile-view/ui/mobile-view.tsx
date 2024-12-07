import classNames from 'classnames/bind';
import Link from 'next/link';
import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './mobile-view.module.scss';

const cx = classNames.bind(styles);

type DividerProps = {
  color: 'light' | 'dark';
};

const Divider = ({ color }: DividerProps) => <hr className={cx('divider', color)} />;

type MobileViewProps = {
  type: 'header' | 'footer';
  courses: Course[];
};

export const MobileView = ({ type, courses }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  return (
    <nav className={cx('mobile-view')} data-testid="mobile-view">
      <Logo type={logoView} />

      <Divider color={color} />

      <Link href={ROUTES.HOME} className={cx('category-link', color)}>
        RS School
      </Link>

      <SchoolMenu courses={courses} heading="rs school" hasTitle={false} color={color} />

      <Divider color={color} />

      <Link href={ROUTES.COURSES} className={cx('category-link', color)}>
        Courses
      </Link>

      <SchoolMenu courses={courses} heading="all courses" hasTitle={false} color={color} />

      <Divider color={color} />

      <Link href={ROUTES.COMMUNITY} className={cx('category-link', color)}>
        Community
      </Link>

      <SchoolMenu courses={courses} heading="community" hasTitle={false} color={color} />

      <Divider color={color} />

      <Link href={ROUTES.MENTORSHIP} className={cx('category-link', color)}>
        Mentorship
      </Link>

      <SchoolMenu courses={courses} heading="mentorship" hasTitle={false} color={color} />
    </nav>
  );
};
