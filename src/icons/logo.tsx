import cn from 'classnames';
import logo from '@/assets/svg/rss-logo.svg';
import Image from '@/features/image';

interface LogoProps {
  type: 'header' | 'footer';
}

export const Logo = ({ type }: LogoProps) => {
  return (
    <Image
      className={cn({
        'white-logo': type === 'footer',
      })}
      src={logo}
      alt="logo"
    />
  );
};
