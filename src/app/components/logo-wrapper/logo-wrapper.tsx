import './logo-wrapper.scss';

interface LogoWrapperProps {
  type: 'navbar' | 'footer';
}

export const LogoWrapper = ({ type }: LogoWrapperProps) => {
  return <div data-testid={`logo-${type}`} className={`logo_${type}`}></div>;
};
