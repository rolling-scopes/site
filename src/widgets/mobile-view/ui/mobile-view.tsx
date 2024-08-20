import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { Logo } from '@/shared/ui/logo';
import { SchoolMenu } from '@/widgets/school-menu';

import './mobile-view.scss';

interface MobileViewProps {
  type: 'header' | 'footer';
}

const Divider = ({ type }: MobileViewProps) => (
  <div className={`divider ${type === 'header' ? 'dark' : 'light'}`} />
);

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';
  const logoView = type === 'header' ? null : 'with-border';

  return (
    <div className="mobile-view" data-testid="mobile-view">
      <Link to={ROUTES.HOME}>
        <Logo type={logoView} />
      </Link>

      <Divider type={type} />

      <Link to={ROUTES.HOME} className={`main-link ${color}`}>
        RS School
      </Link>

      <SchoolMenu heading="rs school" hasTitle={false} color={color} />

      <Divider type={type} />

      <Link to={ROUTES.COURSES} className={`main-link ${color}`}>
        Courses
      </Link>

      <SchoolMenu heading="all courses" hasTitle={false} color={color} />

      <Divider type={type} />

      <Link to={ROUTES.COMMUNITY} className={`main-link mt ${color}`}>
        Community
      </Link>

      <SchoolMenu heading="community" hasTitle={false} color={color} />
    </div>
  );
};
