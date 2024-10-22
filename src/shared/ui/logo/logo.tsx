import { HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/core/const';
import logo from '@/shared/assets/svg/rss-logo.svg';

import styles from './logo.module.scss';

type LogoProps = Pick<HTMLAttributes<HTMLElement>, 'className'> & VariantProps<typeof logoVariants>;

export const cx = classNames.bind(styles);

const logoVariants = cva(cx('logo'), { variants: { type: { 'with-border': cx('with-border') } } });

export const Logo = ({ type, className }: LogoProps) => {
  return (
    <Link
      href={ROUTES.HOME}
      className={logoVariants({
        type,
        className,
      })}
      data-testid="logo"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <Image src={logo} alt="RSS-logo" />
    </Link>
  );
};
