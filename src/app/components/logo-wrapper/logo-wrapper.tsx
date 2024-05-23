import { Logo } from '../../../icons';

import './logo-wrapper.scss';

interface LogoWrapperProps {
  type: 'header' | 'footer';
}

export const LogoWrapper = ({ type }: LogoWrapperProps) => {
  return (
    <div className="logo-wrapper" data-testid={`logo-${type}`}>
      <Logo type={type} />
    </div>
  );
};
