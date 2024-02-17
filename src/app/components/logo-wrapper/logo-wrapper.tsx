import rsLogo from '@/assets/icons/footer/rs-logo.png';
import './logo-wrapper.scss';

export const LogoWrapper = () => {
  return (
    <div className="logo-wrapper">
      <img src={rsLogo} alt="The Rolling Scopes School" />
    </div>
  );
};
