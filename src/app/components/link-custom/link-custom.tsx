import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './link-custom.module.scss';

type LinkCustomProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  button?: boolean;
  size?: 'large' | 'medium' | 'small';
  outlined?: boolean;
  rounded?: boolean;
  className?: string;
};

export const LinkCustom = ({
  children,
  href,
  button = false,
  size = 'large',
  outlined = false,
  rounded = false,
  className = '',
  ...props
}: LinkCustomProps) => {
  const cx = classNames.bind(styles);

  const linkClassName = button
    ? cx('button', [size], {
        rounded,
        outlined,
        colored: !outlined,
      })
    : 'text-link';

  return (
    <Link className={cx(linkClassName, className)} to={href} {...props} rel="noreferrer">
      {children}
    </Link>
  );
};
