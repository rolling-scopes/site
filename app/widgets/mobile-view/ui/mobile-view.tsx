import { NavLink } from '@remix-run/react';
import classNames from 'classnames/bind';
import { ROUTES } from '@/app/const';
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
};

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  return (
    <nav className={cx('mobile-view')} data-testid="mobile-view">
      <Logo type={logoView} />

      <Divider color={color} />

      <NavLink to={ROUTES.HOME} className={cx('category-link', color)}>
        RS School
      </NavLink>

      <SchoolMenu heading="rs school" hasTitle={false} color={color} />

      <Divider color={color} />

      <NavLink to={`/${ROUTES.COURSES}`} className={cx('category-link', color)}>
        Courses
      </NavLink>

      <SchoolMenu heading="all courses" hasTitle={false} color={color} />

      <Divider color={color} />

      <NavLink to={`/${ROUTES.COMMUNITY}`} className={cx('category-link', color)}>
        Community
      </NavLink>

      <SchoolMenu heading="community" hasTitle={false} color={color} />
    </nav>
  );
};
