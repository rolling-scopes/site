import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children'>
  & VariantProps<typeof subtitleVariants> & {
    as?: 'h2' | 'h3' | 'h4';
  };

export const cx = classNames.bind(styles);

const subtitleVariants = cva(cx('subtitle'), {
  variants: {
    size: {
      'extra-small': cx('font-size-extra-small'),
      'small': cx('font-size-small'),
      'medium': cx('font-size-medium'),
      'large': cx('font-size-large'),
      'extra-large': cx('font-size-extra-large'),
    },
    weight: {
      light: cx('font-weight-light'),
      regular: cx('font-weight-regular'),
      medium: cx('font-weight-medium'),
      bold: cx('font-weight-bold'),
    },
  },
  defaultVariants: {
    size: 'medium',
    weight: 'medium',
  },
});

export const Subtitle = ({
  as = 'h3',
  className,
  size,
  weight,
  children,
  ...props
}: SubtitleProps) => {
  const HeadingTag = as;

  return (
    <HeadingTag
      className={subtitleVariants({
        size,
        weight,
        className,
      })}
      data-testid="subtitle"
      {...props}
    >
      {children}
    </HeadingTag>
  );
};
