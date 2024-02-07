import rsLogo from '@/assets/icons/footer/rs-logo.png';
import { Link } from 'react-router-dom';
import './logo-wrapper.scss';

export const LogoWrapper = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
        <img src={rsLogo} alt="The Rolling Scopes School" />
      </Link>
    </div>
  );
};
