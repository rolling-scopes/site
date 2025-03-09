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
      'extra-small': cx('extra-small-font-size'),
      'small': cx('small-font-size'),
      'medium': cx('medium-font-size'),
      'large': cx('large-font-size'),
      'extra-large': cx('extra-large-font-size'),
    },
    weight: {
      light: cx('light'),
      regular: cx('regular'),
      normal: cx('normal'),
      bold: cx('bold'),
    },
  },
  defaultVariants: {
    fontSize: 'medium',
    weight: 'normal',
  },
});

export const Subtitle = ({
  as = 'h3',
  children,
  fontSize,
  weight,
  className,
  ...props
}: SubtitleProps) => {
  const HeadingTag = as;

  return (
    <HeadingTag
      className={subtitleVariants({
        fontSize,
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
