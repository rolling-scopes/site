'use client';
import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import styles from './button.module.scss';

const cx = classNames.bind(styles);

export type ButtonVariant = 'default' | 'pagination' | 'pagination-arrow' | 'pagination-active';

export type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  icon?: {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
};

export const PaginationButton = ({
  children,
  variant = 'default',
  onClick,
  disabled = false,
  className,
  ariaLabel,
  icon,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx('button', `button--${variant}`, className)}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && (
        <Image
          src={icon.src}
          width={icon.width || 15}
          height={icon.height || 15}
          alt={icon.alt}
        />
      )}
      {children}
    </button>
  );
};
