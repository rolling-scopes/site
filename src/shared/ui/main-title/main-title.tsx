import { MainTitleProps, mainTitleVariants } from './main-title.model';

export const MainTitle = ({ children, className, ...props }: MainTitleProps) => {
  return (
    <h1
      {...props}
      className={mainTitleVariants({ className })}
    >
      {children}
    </h1>
  );
};
