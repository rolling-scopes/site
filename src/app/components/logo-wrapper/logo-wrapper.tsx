import { Logo } from '../logo/logo';

import './logo-wrapper.scss';

interface LogoWrapperProps {
  type: 'navbar' | 'footer';
}

const BLACK = '#000000';
const WHITE = '#ffffff';

export const LogoWrapper = ({ type }: LogoWrapperProps) => {
  const color = type === 'navbar' ? BLACK : WHITE;

  return (
    <div className="logo-wrapper" data-testid={`logo-${type}`}>
      <Logo color={color} />
    </div>
  );
};
