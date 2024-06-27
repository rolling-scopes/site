import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './widget-title.module.scss';

export type WidgetTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof widgetTitleVariants>;

export const widgetTitleClassNames = classNames.bind(styles);

export const widgetTitleVariants = cva(widgetTitleClassNames('title'), {
  variants: {
    mods: {
      lines: widgetTitleClassNames('lines'),
      asterisk: widgetTitleClassNames('asterisk'),
    },
    size: {
      small: widgetTitleClassNames('small'),
      medium: widgetTitleClassNames('medium'),
      large: widgetTitleClassNames('large'),
    },
  },
  defaultVariants: {
    size: 'medium',
    mods: null,
  },
});
