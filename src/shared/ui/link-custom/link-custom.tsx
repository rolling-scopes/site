/* eslint-disable @stylistic/jsx-closing-bracket-location */
import { AnchorHTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import arrowIcon from '@/shared/assets/svg/arrow.svg';
import textLinkIcon from '@/shared/assets/svg/text-link.svg';

import styles from './link-custom.module.scss';

const cx = classNames.bind(styles);

export type LinkCustomVariants = VariantProps<typeof linkCustomVariants>;

export type LinkCustomProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>
  & LinkCustomVariants
  & LinkCustomAdditionalProps;

type LinkCustomAdditionalProps = {
  href: string;
  disabledLabel?: string;
  iconRight?: StaticImageData | null;
  iconLeft?: StaticImageData | null;
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
  disabledLabel,
  href,
  iconLeft,
  iconRight,
  className = '',
  variant = 'textLink',
  external = false,
  disabled = false,
  highContrast = false,
  ...props
}: LinkCustomProps) => {
  const isDisabled = disabled || !href;
  const showLabel = isDisabled ? disabledLabel : children;

  const resolveIcon = () => {
    switch (true) {
      case iconRight !== undefined:
        return iconRight;
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
        { disabled: isDisabled },
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
      {iconLeft && (
        <span className={cx('icon-wrapper', 'icon-wrapper-left')}>
          {!disabled && <Image
            src={iconLeft}
            width={20}
            height={20}
            alt=""
            data-testid="icon"
          />}
        </span>
      )}

      {showLabel}

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
