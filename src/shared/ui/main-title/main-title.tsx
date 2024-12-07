import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './main-title.module.scss';

type MainTitleProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof mainTitleVariants>;

export const cx = classNames.bind(styles);

const mainTitleVariants = cva(cx('main-title'), { variants: { size: { small: cx('small') } } });

export const MainTitle = ({ children, className, size }: MainTitleProps) => {
  return (
    <h1
      className={mainTitleVariants({
        className,
        size,
      })}
      data-testid="main-title"
    >
      {children}
    </h1>
  );
};
