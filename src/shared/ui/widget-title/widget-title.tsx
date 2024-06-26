import { type VariantProps, cva } from 'class-variance-authority';

import styles from './widget-title.module.scss';

export type WidgetTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof widgetTitleVariants>;

export const widgetTitleVariants = cva(styles.title, {
  variants: {
    // accent: {
    //   left: styles.leftAccent,
    //   top: styles.topAccent,
    // },
    // variant: {
    //   primary: styles.primary,
    //   secondary: styles.secondary,
    //   danger: styles.danger,
    //   warning: styles.warning,
    //   success: styles.success,
    // },
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
    // accent: null,
    size: 'medium',
    mods: null,
    // variant: 'primary',
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
