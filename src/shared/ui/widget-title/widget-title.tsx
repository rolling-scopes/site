import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './widget-title.module.scss';

type WidgetTitleProps = Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'children' | 'id'> &
  VariantProps<typeof widgetTitleVariants> & {
    as?: 'h1' | 'h2' | 'h3';
  };

export const cx = classNames.bind(styles);

const widgetTitleVariants = cva(cx('widget-title'), {
  variants: {
    size: {
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

export const WidgetTitle = ({ children, size, mods, className, as: Component = 'h2' }: WidgetTitleProps) => {
  return (
    <Component
      className={widgetTitleVariants({
        size,
        mods,
        className,
      })}
      data-testid="widget-title"
    >
      {children}
    </Component>
  );
};
