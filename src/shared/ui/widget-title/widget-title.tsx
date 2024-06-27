import { type VariantProps, cva } from 'class-variance-authority';

import styles from './widget-title.module.scss';

type WidgetTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof widgetTitleVariants>;

const widgetTitleVariants = cva(styles.title, {
  variants: {
    mods: {
      lines: styles.lines,
      asterisk: styles.asterisk,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    size: 'medium',
    mods: null,
  },
});

export const WidgetTitle = ({ children, size, mods, className, ...props }: WidgetTitleProps) => {
  return (
    <h2
      {...props}
      className={widgetTitleVariants({
        size,
        mods,
        className,
      })}
    >
      {children}
    </h2>
  );
};
