import logo from '@/assets/svg/rss-logo.svg';
import Image from '@/features/image';

interface LogoProps {
  type: 'navbar' | 'footer';
}

export const Logo = ({ type }: LogoProps) => {
  return <Image className={type !== 'navbar' ? 'white-logo' : ''} src={logo} alt="logo" />;
};
