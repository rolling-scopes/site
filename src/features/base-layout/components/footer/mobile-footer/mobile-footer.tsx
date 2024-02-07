import { Link } from 'react-router-dom';
import { LogoWrapper } from '../about-list/logo-wrapper';
import { SchoolMenu } from '../school-menu';
import './mobile-footer.scss';

const Divider = () => <div className="divider" />;

export const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <LogoWrapper />
      <Link to="/#about" className="main-link">
        About Community
      </Link>
      <Divider />
      <SchoolMenu heading="rs school" />
      <Divider />
      <SchoolMenu heading="all courses" />
      <Divider />
      <Link to="/#community" className="main-link mt">
        Community
      </Link>
      <Divider />
      <Link to="/#events" className="main-link">
        Events
      </Link>
      <Divider />
      <Link to="/#merch" className="main-link">
        Merch
      </Link>
      <Divider />
    </div>
  );
};
