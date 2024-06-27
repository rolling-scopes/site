import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './main-title.module.scss';

type MainTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof mainTitleVariants>;

export const cx = classNames.bind(styles);

export const mainTitleVariants = cva(cx('title'));

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
