import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './widget-title.module.scss';

export type WidgetTitleVariants = VariantProps<typeof widgetTitleVariants>;

type WidgetTitleProps = Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'children' | 'id'>
  & WidgetTitleVariants;

export const cx = classNames.bind(styles);

const widgetTitleVariants = cva(cx('widget-title'), {
  variants: {
    size: {
      smallest: cx('smallest'),
      small: cx('small'),
      medium: cx('medium'),
      large: cx('large'),
    },
    mods: {
      lines: cx('lines'),
      asterisk: cx('asterisk'),
    },
  },
  defaultVariants: {
    size: 'medium',
    mods: null,
  },
});

export const WidgetTitle = ({ children, size, mods, className }: WidgetTitleProps) => {
  return (
    <h2
      className={widgetTitleVariants({
        size,
        mods,
        className,
      })}
      data-testid="widget-title"
    >
      {children}
    </h2>
  );
};
