import { Link } from 'react-router-dom';
import logo from '@/assets/icons/footer/rs-logo.png';
import './about-list.scss';

export const AboutList = () => {
  return (
    <div className="left">
      <div className="logo-wrapper">
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <img src={logo} alt="The Rolling Scopes School" />
        </Link>
      </div>
      <ul className="about-list">
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
