import { AnchorHTMLAttributes, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { TextLinkIcon } from '@/shared/icons';

import styles from './link-custom.module.scss';

export const cx = classNames.bind(styles);

type LinkCustomProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> &
  VariantProps<typeof linkCustomVariants> &
  LinkCustomAdditionalProps;

type LinkCustomAdditionalProps = {
  href: string;
  icon?: ReactNode;
  external?: boolean;
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
});

const externalLinkAttributes = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const LinkCustom = ({
  children,
  href,
  icon = <></>,
  className = '',
  variant = 'textLink',
  external = false,
  ...props
}: LinkCustomProps) => {
  const iconElement = external && variant === 'textLink' ? <TextLinkIcon /> : icon;

  return (
    <Link
      className={linkCustomVariants({
        variant,
        className,
      })}
      to={href}
      {...props}
      {...(external && externalLinkAttributes)}
    >
      {children}
      {iconElement}
    </Link>
  );
};
