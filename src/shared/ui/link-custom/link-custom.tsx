/* eslint-disable @stylistic/jsx-closing-bracket-location */
import { AnchorHTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import arrowIcon from '@/shared/assets/svg/arrow.svg';
import textLinkIcon from '@/shared/assets/svg/text-link.svg';

import styles from './link-custom.module.scss';

export const cx = classNames.bind(styles);

export type LinkCustomVariants = VariantProps<typeof linkCustomVariants>;

export type LinkCustomProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>
  & LinkCustomVariants
  & LinkCustomAdditionalProps;

type LinkCustomAdditionalProps = {
  href: string;
  icon?: StaticImageData | null;
  external?: boolean;
  disabled?: boolean;
  highContrast?: boolean;
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
    highContrast: {
      true: cx('high-contrast'),
      false: null,
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
  disabled = false,
  highContrast = false,
  ...props
}: LinkCustomProps) => {
  const resolveIcon = () => {
    switch (true) {
      case icon !== undefined:
        return icon;
      case external && variant === 'textLink':
        return textLinkIcon;
      case variant === 'secondary':
        return arrowIcon;
      case variant === 'rounded':
        return arrowIcon;
      default:
        return null;
    }
  };

  const iconSrc = resolveIcon();

  return (
    <Link
      className={cx(
        { disabled },
        { highContrast },
        linkCustomVariants({
          variant,
          className,
        }),
      )}
      href={href}
      {...props}
      {...(external && externalLinkAttributes)}
    >
      {children}
      {iconSrc && (
        <span className={cx('icon-wrapper')}>
          {!disabled && <Image
            src={iconSrc}
            width={20}
            height={20}
            alt=""
            data-testid="icon"
          />}
        </span>
      )}
    </Link>
  );
};
