import { Link } from 'react-router-dom';
import './about-list.scss';
import { LogoWrapper } from './logo-wrapper';

export const AboutList = () => {
  return (
    <div className="about-list">
      {/* <div className="logo-wrapper">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt="The Rolling Scopes School" />
        </Link>
      </div> */}
      <LogoWrapper />
      <ul className="about-links">
        <li>
          <Link to="/#about">About RS</Link>
        </li>
        <li>
          <Link to="/#events">Events</Link>
        </li>
        <li>
          <Link to="/#community">Community</Link>
        </li>
        <li>
          <Link to="/#merch">Merch</Link>
        </li>
      </ul>
    </div>
  );
};
