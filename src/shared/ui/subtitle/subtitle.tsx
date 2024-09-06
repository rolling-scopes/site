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
      small: cx('small-font-size'),
      large: cx('large-font-size'),
    },
    color: {
      gray: cx('gray-600'),
      black: cx('black'),
    },
    withoutPadding: { true: cx('without-padding') },
  },
  defaultVariants: {
    fontSize: 'small',
    color: 'gray',
    withoutPadding: false,
  },
});

export const Subtitle = ({
  children,
  fontSize,
  color,
  withoutPadding,
  className,
}: SubtitleProps) => {
  return (
    <h3
      className={subtitleVariants({
        fontSize,
        color,
        withoutPadding,
        className,
      })}
      data-testid="subtitle"
    >
      {children}
    </h3>
  );
};
