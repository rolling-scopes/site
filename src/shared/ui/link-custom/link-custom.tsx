import { AnchorHTMLAttributes, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './link-custom.module.scss';

export const cx = classNames.bind(styles);

type LinkCustomProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkCustomVariants> &
  LinkCustomAdditionalProps;

type LinkCustomAdditionalProps = {
  href: string;
  icon?: ReactNode;
};

const linkCustomVariants = cva('', {
  variants: {
    variant: {
      roundedSmall: cx('button', 'colored', 'small'),
      coloredSquare: cx('button', 'colored', 'large'),
      outlined: cx('button', 'outlined', 'large'),
      outlinedBig: cx('button', 'medium', 'outlined'),
      textLink: cx('textLink'),
    },
    defaultVariants: { variant: 'textLink' },
  },
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
      rel="noreferrer"
    >
      {children}
      {icon}
    </Link>
  );
};
