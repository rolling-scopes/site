import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './widget-title.module.scss';

type WidgetTitleProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof widgetTitleVariants>;

export const cx = classNames.bind(styles);

const widgetTitleVariants = cva(cx('title'), {
  variants: {
    mods: {
      lines: cx('lines'),
      asterisk: cx('asterisk'),
    },
    size: {
      small: cx('small'),
      medium: cx('medium'),
      large: cx('large'),
    },
    marginSize: {
      small: cx('margin-small'),
      medium: cx('margin-medium'),
    },
  },
  defaultVariants: {
    size: 'medium',
    mods: null,
    marginSize: null,
  },
});

export const WidgetTitle = ({
  children,
  size,
  mods,
  marginSize,
  className,
  ...props
}: WidgetTitleProps) => {
  return (
    <h2
      {...props}
      className={widgetTitleVariants({
        size,
        mods,
        marginSize,
        className,
      })}
    >
      {children}
    </h2>
  );
};
