import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { TextWithLink } from '../text-with-link';
import { ListData } from '@/shared/types';

import styles from './list.module.scss';

type ListProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
  & VariantProps<typeof listVariants>
  & { data: ListData };

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

export const List = ({ data, className = '', size, type }: ListProps) => {
  if (!data?.length) {
    return null;
  }

  return (
    <ul
      className={listVariants({
        size,
        type,
        className,
      })}
      data-testid="list"
    >
      {data.map((listItem) => {
        const isLink = typeof listItem !== 'string';
        const itemClassName = cx('list-item');
        const keyListItem = isLink ? listItem[0].id : listItem;

        return (
          <li className={itemClassName} key={keyListItem} data-testid="list-item">
            {
              isLink
                ? <TextWithLink data={listItem} />
                : listItem
            }
          </li>
        );
      })}
    </ul>
  );
};
