import { VariantProps, cva } from 'class-variance-authority';

import styles from './main-title.module.scss';

type MainTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof mainTitleVariants>;

const mainTitleVariants = cva(styles.title);

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
