import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/core/const';
import logo from '@/shared/assets/svg/rss-logo.svg';

import styles from './logo.module.scss';

type LogoProps = Pick<HTMLAttributes<HTMLElement>, 'className'> &
  VariantProps<typeof logoVariants> & {
    icon?: StaticImageData;
  };

export const cx = classNames.bind(styles);

const logoVariants = cva(cx('logo'), { variants: { type: { 'with-border': cx('with-border') } } });

export const Logo = ({ type, className, icon = logo }: LogoProps) => {
  return (
    <Link
      href={ROUTES.HOME}
      className={logoVariants({
        type,
        className,
      })}
      data-testid="logo"
    >
      <Image src={icon} alt="RSS-logo" />
    </Link>
  );
};
