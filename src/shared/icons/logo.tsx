import cn from 'classnames';
import logo from '@/shared/assets/svg/rss-logo.svg';
import Image from '@/shared/ui/image';

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
