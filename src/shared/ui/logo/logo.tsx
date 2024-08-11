import { HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import logo from '@/shared/assets/svg/rss-logo.svg';
import Image from '@/shared/ui/image';

import styles from './logo.module.scss';

type LogoProps = Pick<HTMLAttributes<HTMLElement>, 'className'> & VariantProps<typeof logoVariants>;

export const cx = classNames.bind(styles);

const logoVariants = cva(cx('logo'), {
  variants: {
    type: {
      default: cx(''),
      'with-border': cx('with-border'),
    },
  },
  defaultVariants: { type: 'default' },
});

export const Logo = ({ type = 'default', className }: LogoProps) => {
  return (
    <figure
      className={logoVariants({
        type,
        className,
      })}
      data-testid={`logo-${type}`}
    >
      <Image
        src={logo}
        alt="RSS-logo"
      />
    </figure>
  );
};
