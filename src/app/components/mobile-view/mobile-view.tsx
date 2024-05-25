import { Link } from 'react-router-dom';
import { LogoWrapper, SchoolMenu } from '@/app/components';
import { buildUrl } from '@/app/services/platform';

import './mobile-view.scss';

interface MobileViewProps {
  type: 'header' | 'footer';
}

const Divider = ({ type }: MobileViewProps) => (
  <div className={`divider ${type === 'header' ? 'dark' : 'light'}`} />
);

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'header' ? 'dark' : 'light';

  return (
    <div className="mobile-view" data-testid="mobile-view">
      <Link to={buildUrl('/')}>
        <LogoWrapper type={type} />
      </Link>

      <Link to={buildUrl('/#about')} className={`main-link ${color}`}>
        About Community
      </Link>

      <Divider type={type} />

      <SchoolMenu heading="rs school" color={color} />

      <Divider type={type} />

      <SchoolMenu heading="all courses" color={color} />

      <Divider type={type} />

      <Link to={buildUrl('/#community')} className={`main-link mt ${color}`}>
        Community
      </Link>

      <Divider type={type} />

      <Link to={buildUrl('/#events')} className={`main-link ${color}`}>
        Events
      </Link>

      <Divider type={type} />

      <Link to={buildUrl('/#merch')} className={`main-link ${color}`}>
        Merch
      </Link>

      <Divider type={type} />
    </div>
  );
};
