// todo delete TextWithLink
import { HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { TextWithLink } from '../text-with-link';
import { Description } from '@/widgets/required/required.types';

import styles from './list.module.scss';

type ListProps = Pick<HTMLAttributes<HTMLElement>, 'className'>
  & VariantProps<typeof listVariants>
  & ListData;

type ListData = {
  data: Description;
};

export const cx = classNames.bind(styles);

const listVariants = cva(cx('list'), {
  variants: {
    type: {
      default: cx(''),
      marked: cx('marked'),
    },
  },
  defaultVariants: { type: 'default' },
});

export const List = ({ data, type }: ListProps) => {
  if (!data.length) {
    return <ul data-testid="list"></ul>;
  }

  return (
    <ul className={listVariants({ type })} data-testid="list">
      {data.map((listItem) => {
        const isLink = typeof listItem !== 'string';
        const itemClassName = type === 'marked' ? 'marked' : '';
        const keyListItem = isLink ? listItem[0].id : listItem;

        return (
          <li className={itemClassName} key={keyListItem} data-testid="list-item">
            {
              isLink
                ? <TextWithLink data={listItem} />
                : <>{listItem}</>
            }
          </li>
        );
      })}
    </ul>
  );
};
