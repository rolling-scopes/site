import { AnchorHTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import Image from 'next/image';
import NextLink from 'next/link';

import { LinkData } from '@/shared/ui/link-custom/types';

import styles from './link-custom.module.scss';

export const cx = classNames.bind(styles);

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>
  & VariantProps<typeof linkVariants>
  & LinkAdditionalProps;

type LinkAdditionalProps = LinkData & {
  external?: boolean;
  disabled?: boolean;
  highContrast?: boolean;
};

const linkVariants = cva('', {
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

export const Link = ({
  variant = 'textLink',
  label,
  disabledLabel,
  link,
  icon,
  className = '',
  external = false,
  highContrast = false,
  ...props
}: LinkProps) => {
  const showLabel = link ? label : disabledLabel;
  const disabled = !link;

  return (
    <NextLink
      className={cx(
        { disabled },
        { highContrast },
        linkVariants({
          variant,
          className,
        }),
      )}
      href={link}
      {...props}
      {...(external && externalLinkAttributes)}
    >
      {icon && (
        <span className={cx('icon-wrapper')}>
          <Image src={icon} alt="" aria-hidden="true" />
        </span>
      )}
      {showLabel}
    </NextLink>
  );
};
