import { WidgetTitleProps, widgetTitleVariants } from './widget-title.model';

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
