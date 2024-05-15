import { Logo } from '../logo/logo';

import './logo-wrapper.scss';

interface LogoWrapperProps {
  type: 'header' | 'footer';
}

const BLACK = '#000';
const WHITE = '#fff';

export const LogoWrapper = ({ type }: LogoWrapperProps) => {
  const color = type === 'header' ? BLACK : WHITE;

  return (
    <div className="logo-wrapper" data-testid={`logo-${type}`}>
      <Logo color={color} />
    </div>
  );
};
