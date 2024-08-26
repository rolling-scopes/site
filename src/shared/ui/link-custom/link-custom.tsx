import { AnchorHTMLAttributes, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './link-custom.module.scss';

export const cx = classNames.bind(styles);

type LinkCustomProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel'> &
  VariantProps<typeof linkCustomVariants> &
  LinkCustomAdditionalProps;

type LinkCustomAdditionalProps = {
  href: string;
  icon?: ReactNode;
};

const linkCustomVariants = cva('', {
  variants: {
    variant: {
      rounded: cx('button', 'rounded'),
      primary: cx('button', 'primary'),
      secondary: cx('button', 'secondary'),
      textLink: cx('textLink'),
    },
  },
  defaultVariants: { variant: 'textLink' },
});

export const LinkCustom = ({
  children,
  href,
  icon = <></>,
  className = '',
  variant,
  ...props
}: LinkCustomProps) => {
  return (
    <Link
      className={linkCustomVariants({
        variant,
        className,
      })}
      to={href}
      {...props}
      rel="noopener noreferrer"
    >
      {children}
      {icon}
    </Link>
  );
};
