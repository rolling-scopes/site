import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import logo from '@/shared/assets/svg/rss-logo.svg';
import { ROUTES } from '@/shared/constants';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './logo.module.scss';

type LogoProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
  & VariantProps<typeof logoVariants> & {
    logoSrc?: StaticImageData;
    onClick?: () => void;
  };

export const cx = classNames.bind(styles);

const logoVariants = cva(cx('logo'), { variants: { type: { 'with-border': cx('with-border') } } });

export const Logo = ({ type, className, logoSrc = logo, onClick }: LogoProps) => {
  return (
    <LinkCustom
      href={ROUTES.HOME}
      className={logoVariants({
        type,
        className,
      })}
      data-testid="logo"
      onClick={onClick}
    >
      <Image src={logoSrc} alt="RSS-logo" />
    </LinkCustom>
  );
};
