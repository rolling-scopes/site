import { Link } from 'react-router-dom';
import { LogoWrapper } from '@/app/components';
import { SchoolMenu } from '@/app/components';
import './mobile-view.scss';

interface MobileViewProps {
  type: 'navbar' | 'footer';
}

const Divider = ({ type }: MobileViewProps) => (
  <div className={`divider ${type === 'navbar' ? 'dark' : 'light'}`} />
);

export const MobileView = ({ type }: MobileViewProps) => {
  const color = type === 'navbar' ? 'dark' : 'light';

  return (
    <div className="mobile-view" data-testid="mobile-view">
      <Link to={'/'} onClick={() => window.scrollTo({ top: 0 })}>
        <LogoWrapper />
      </Link>

      <Link to="/#about" className={`main-link ${color}`}>
        About Community
      </Link>

      <Divider type={type} />

      <SchoolMenu heading="rs school" color={color} />

      <Divider type={type} />

      <SchoolMenu heading="all courses" color={color} />

      <Divider type={type} />

      <Link to="/#community" className={`main-link mt ${color}`}>
        Community
      </Link>

      <Divider type={type} />

      <Link to="/#events" className={`main-link ${color}`}>
        Events
      </Link>

      <Divider type={type} />

      <Link to="/#merch" className={`main-link ${color}`}>
        Merch
      </Link>

      <Divider type={type} />
    </div>
  );
};
