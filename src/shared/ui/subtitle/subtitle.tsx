import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof subtitleVariants>;

export const cx = classNames.bind(styles);

const subtitleVariants = cva(cx('subtitle'), {
  variants: {
    size: {
      medium: cx('medium'),
      large: cx('large'),
    },
    color: {
      gray: cx('gray'),
      black: cx('black'),
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'gray',
  },
});

export const Subtitle = ({ children, size, color, ...props }: SubtitleProps) => {
  return (
    <h3
      {...props}
      className={subtitleVariants({
        size,
        color,
        className: 'subtitle',
      })}
    >
      {children}
    </h3>
  );
};
