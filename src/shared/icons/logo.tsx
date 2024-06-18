import cn from 'classnames';
import Image from '@/features/image';
import logo from '@/shared/assets/svg/rss-logo.svg';

interface LogoProps {
  type: 'header' | 'footer';
}

export const Logo = ({ type }: LogoProps) => {
  return (
    <Image
      className={cn({ 'white-logo': type === 'footer' })}
      src={logo}
      alt="logo"
    />
  );
};
