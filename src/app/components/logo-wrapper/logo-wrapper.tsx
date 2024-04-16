import rsLogoFooter from '@/assets/icons/footer/rs-logo.webp';
import rsLogoNavbar from '@/assets/rs-logo.webp';

import './logo-wrapper.scss';

interface LogoWrapperProps {
  type: 'navbar' | 'footer';
}

export const LogoWrapper = ({ type }: LogoWrapperProps) => {
  const logo = type === 'navbar' ? rsLogoNavbar : rsLogoFooter;

  return (
    <div className="logo-wrapper">
      <img src={logo} alt="The Rolling Scopes School" width={40} height={40} loading="lazy" />
    </div>
  );
};
