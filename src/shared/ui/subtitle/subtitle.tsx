import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './subtitle.module.scss';

type SubtitleProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof subtitleVariants>;

export const cx = classNames.bind(styles);

const subtitleVariants = cva(cx('subtitle'), {
  variants: {
    fontSize: {
      medium: cx('font-medium'),
      large: cx('font-large'),
    },
    color: {
      gray: cx('gray'),
      black: cx('black'),
    },
    marginSize: {
      small: cx('margin-small'),
      medium: cx('margin-medium'),
    },
  },
  defaultVariants: {
    fontSize: 'medium',
    color: 'gray',
    marginSize: null,
  },
});

export const Subtitle = ({
  children,
  fontSize,
  color,
  marginSize,
  className,
  ...props
}: SubtitleProps) => {
  return (
    <h3
      {...props}
      className={subtitleVariants({
        fontSize,
        color,
        marginSize,
        className,
      })}
    >
      {children}
    </h3>
  );
};
