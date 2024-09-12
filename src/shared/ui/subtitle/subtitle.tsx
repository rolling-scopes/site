import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children'>
  & VariantProps<typeof subtitleVariants>;

export const cx = classNames.bind(styles);

const subtitleVariants = cva(cx('subtitle'), {
  variants: {
    fontSize: {
      extraSmall: cx('extra-small-font-size'),
      small: cx('small-font-size'),
      medium: cx('medium-font-size'),
      large: cx('large-font-size'),
      extraLarge: cx('extra-large-font-size'),
    },
    color: {
      gray: cx('gray-600'),
      black: cx('black'),
    },
  },
  defaultVariants: {
    fontSize: 'medium',
    color: 'gray',
  },
});

export const Subtitle = ({ children, fontSize, color, className }: SubtitleProps) => {
  return (
    <h3
      className={subtitleVariants({
        fontSize,
        color,
        className,
      })}
      data-testid="subtitle"
    >
      {children}
    </h3>
  );
};
