// todo delete TextWithLink
import classNames from 'classnames/bind';
import { TextWithLink } from '../text-with-link';
import { Description } from '@/widgets/required/required.types';

import styles from './list.module.scss';

export const cx = classNames.bind(styles);

interface ActionsProps {
  actions: Description;
  marked?: boolean;
}

export const List = ({ actions, marked = false }: ActionsProps) => {
  return (
    <ul className={cx('stage-actions')}>
      {actions.map((action) => {
        const isLink = typeof action !== 'string';
        const itemClassName = isLink || marked ? 'marked' : undefined;
        const keyAction = isLink ? action[0].id : action;

        return (
          <li className={itemClassName} key={keyAction}>
            {isLink ? <TextWithLink data={action} /> : <>{action}</>}
          </li>
        );
      })}
    </ul>
  );
};
