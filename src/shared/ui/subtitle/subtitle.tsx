import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children'> &
  VariantProps<typeof subtitleVariants>;

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
    color: {
      gray: cx('gray-600'),
      black: cx('black'),
    },
    weight: {
      normal: cx('normal'),
      bold: cx('bold'),
    },
  },
  defaultVariants: {
    fontSize: 'medium',
    color: 'gray',
    weight: 'normal',
  },
});

export const Subtitle = ({ children, fontSize, color, weight, className, ...props }: SubtitleProps) => {
  return (
    <h3
      className={subtitleVariants({
        fontSize,
        color,
        weight,
        className,
      })}
      data-testid="subtitle"
      {...props}
    >
      {children}
    </h3>
  );
};
