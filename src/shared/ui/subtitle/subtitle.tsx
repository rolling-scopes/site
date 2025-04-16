import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children'> &
  VariantProps<typeof subtitleVariants> & {
    as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };

export const cx = classNames.bind(styles);

const subtitleVariants = cva(cx('subtitle'), {
  variants: {
    fontSize: {
      'extra-small': cx('font-size-extra-small'),
      'small': cx('font-size-small'),
      'medium': cx('font-size-medium'),
      'large': cx('font-size-large'),
      'extra-large': cx('font-size-extra-large'),
    },
    fontWeight: {
      light: cx('font-weight-light'),
      regular: cx('font-weight-regular'),
      medium: cx('font-weight-medium'),
      bold: cx('font-weight-bold'),
    },
  },
  defaultVariants: {
    fontSize: 'medium',
    fontWeight: 'medium',
  },
});

export const Subtitle = ({
  as = 'h3',
  className,
  fontSize,
  fontWeight,
  children,
  ...props
}: SubtitleProps) => {
  const HeadingTag = as;

  return (
    <HeadingTag
      className={subtitleVariants({
        fontSize,
        fontWeight,
        className,
      })}
      data-testid="subtitle"
      {...props}
    >
      {children}
    </HeadingTag>
  );
};
