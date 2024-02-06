import { AboutList } from './about-list';
import { Copyright } from './copyright/copyright';
import './footer.scss';
import { SchoolMenu } from './school-menu';

export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer content">
        <div className="info-wrapper">
          <AboutList />
          <SchoolMenu />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};
