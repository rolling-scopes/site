import { Link } from 'react-router-dom';
import './footer.scss';

import logo from '@/assets/icons/footer/rs-logo.png';

export const Footer = () => {
  // const currentYear = new Date().getFullYear(); © {currentYear} The Rolling Scopes

  return (
    <footer className="footer container">
      <div className="footer content">
        <div className="left">
          <div className="logo-wrapper">
            <Link to="/#about">
              <img src={logo} alt="The Rolling Scopes School" />
            </Link>
          </div>
          <ul className="">
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
