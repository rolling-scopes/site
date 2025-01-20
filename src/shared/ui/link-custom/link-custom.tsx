import { AnchorHTMLAttributes, ReactNode } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Link from 'next/link';

import { ArrowIcon, TextLinkIcon } from '@/shared/icons';

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
      withCustomClassName: '',
      textLink: cx('text-link'),
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
  icon,
  className = '',
  variant = 'textLink',
  external = false,
  ...props
}: LinkCustomProps) => {
  const resolveIcon = () => {
    switch (true) {
      case external && variant === 'textLink':
        return <TextLinkIcon />;
      case icon !== undefined:
        return icon;
      case variant === 'primary':
      case variant === 'secondary':
        return <ArrowIcon />;
      case variant === 'rounded':
        return <ArrowIcon size={16} />;
      default:
        return <></>;
    }
  };

  return (
    <Link
      className={linkCustomVariants({
        variant,
        className,
      })}
      href={href}
      {...props}
      {...(external && externalLinkAttributes)}
    >
      {children}
      {resolveIcon()}
    </Link>
  );
};
