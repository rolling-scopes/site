import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './widget-title.module.scss';

export type WidgetTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof widgetTitleVariants>;

const cx = classNames.bind(styles);

export const widgetTitleVariants = cva(cx('title'), {
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
  },
  defaultVariants: {
    size: 'medium',
    mods: null,
  },
});
