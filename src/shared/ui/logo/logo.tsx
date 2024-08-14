import { HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import logo from '@/shared/assets/svg/rss-logo.svg';
import Image from '@/shared/ui/image';

import styles from './logo.module.scss';

type LogoProps = Pick<HTMLAttributes<HTMLElement>, 'className'> & VariantProps<typeof logoVariants>;

export const cx = classNames.bind(styles);

const logoVariants = cva(cx('logo'), { variants: { type: { 'with-border': cx('with-border') } } });

export const Logo = ({ type, className }: LogoProps) => {
  return (
    <div
      className={logoVariants({
        type,
        className,
      })}
      data-testid="logo"
    >
      <Image
        src={logo}
        alt="RSS-logo"
      />
    </div>
  );
};
