// todo delete TextWithLink
import classNames from 'classnames/bind';
import { TextWithLink } from '../text-with-link';
import { LinkList } from '@/widgets/required';

import styles from './list.module.scss';

export type ListProps = {
  data: ListData;
  marked?: boolean;
};

export type ListData = (string | LinkList)[] | [] | undefined;

export const cx = classNames.bind(styles);

export const List = ({ data, marked = true }: ListProps) => {
  if (!data?.length) {
    return <></>;
  }

  return (
    <ul
      className={cx('list', { marked })}
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
