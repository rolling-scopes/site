/* eslint-disable @stylistic/jsx-one-expression-per-line */
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './link-custom.module.scss';

type LinkCustomProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  icon?: JSX.Element;
  button?: boolean;
  size?: 'large' | 'medium' | 'small';
  variant?: 'outlined' | 'colored' | '';
  rounded?: boolean;
  className?: string;
};

export const LinkCustom = ({
  children,
  href,
  icon = <></>,
  button = false,
  size = 'large',
  variant = '',
  rounded = false,
  className = '',
  ...props
}: LinkCustomProps) => {
  const cx = classNames.bind(styles);

  const linkClassName = button
    ? cx('button', [size], [variant], {
      rounded,
    })
    : 'text-link';

  return (
    <Link className={cx(linkClassName, className)} to={href} {...props} rel="noreferrer">
      {children} {icon}
    </Link>
  );
};
