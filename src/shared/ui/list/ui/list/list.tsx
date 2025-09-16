import { HTMLAttributes, PropsWithChildren } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './list.module.scss';

type ListProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
  & VariantProps<typeof listVariants>
  & PropsWithChildren & {
    ordered?: boolean;
  };

export const cx = classNames.bind(styles);

const listVariants = cva(cx('list'), {
  variants: {
    type: {
      marked: cx('marked'),
      unmarked: cx(''),
    },
  },
  defaultVariants: { type: 'marked' },
});

export const List = ({ className = '', type, children, ordered }: ListProps) => {
  const classNameList = listVariants({
    type,
    className,
  });

  if (ordered) {
    return (
      <ol className={classNameList} data-testid="ordered-list">
        {children}
      </ol>
    );
  }

  return (
    <ul className={classNameList} data-testid="unordered-list">
      {children}
    </ul>
  );
};
