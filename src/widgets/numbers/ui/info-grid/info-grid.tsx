import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classnames from 'classnames/bind';

import styles from './info-grid.module.scss';

const cx = classnames.bind(styles);

const gridVariants = cva(cx('info-grid'), {
  variants: {
    borderColor: {
      gray: cx('border-gray'),
      black: cx('border-black'),
    },
  },
  defaultVariants: { borderColor: 'gray' },
});

type InfoGridProps = Pick<HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'> &
  VariantProps<typeof gridVariants>;
export const InfoGrid = ({ children, className, borderColor }: InfoGridProps) => {
  return (
    <div
      className={gridVariants({
        borderColor,
        className,
      })}
    >
      {children}
    </div>
  );
};
