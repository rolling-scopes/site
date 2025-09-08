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

export const ContentList = ({ className = '', size, type, children, ordered }: ListProps) => {
  const classNameList = listVariants({
    size,
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
