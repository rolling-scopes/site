import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';

import styles from './mobile-view.module.scss';

const cx = classNames.bind(styles);

interface MobileViewProps {
  type: 'header' | 'footer';
}

const Divider = ({ type }: MobileViewProps) => (
  <div className={cx('divider', type === 'header' ? 'dark' : 'light')} />
);

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  return (
    <div className={cx('mobile-view')} data-testid="mobile-view">
      <Link to={ROUTES.HOME}>
        <Logo type={logoView} />
      </Link>

      <Divider type={type} />

      <Link to={ROUTES.HOME} className={cx('category-link', color)}>
        RS School
      </Link>

      <SchoolMenu heading="rs school" hasTitle={false} color={color} />

      <Divider type={type} />

      <Link to={ROUTES.COURSES} className={cx('category-link', color)}>
        Courses
      </Link>

      <SchoolMenu heading="all courses" hasTitle={false} color={color} />

      <Divider type={type} />

      <Link to={ROUTES.COMMUNITY} className={cx('category-link', color)}>
        Community
      </Link>

      <SchoolMenu heading="community" hasTitle={false} color={color} />
    </div>
  );
};
