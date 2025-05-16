import { HTMLAttributes, PropsWithChildren } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './list.module.scss';

type ListProps = Pick<HTMLAttributes<HTMLElement>, 'className'> &
  VariantProps<typeof listVariants> &
  PropsWithChildren;

export const cx = classNames.bind(styles);

const listVariants = cva(cx('list'), {
  variants: {
    size: {
      compact: cx('compact'),
      medium: cx('medium'),
    },
    type: {
      marked: cx('marked'),
      unmarked: cx(''),
    },
  },
  defaultVariants: {
    size: 'medium',
    type: 'marked',
  },
});

export const ContentList = ({ className = '', size, type, children }: ListProps) => {
  return (
    <ul
      className={listVariants({
        size,
        type,
        className,
      })}
      data-testid="list"
    >
      {children}
    </ul>
  );
};
