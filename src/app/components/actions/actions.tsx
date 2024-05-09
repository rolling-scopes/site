import { TextWithLink } from '../text-with-link';
import { Description } from '@/features/required/required.types';

import './actions.scss';

interface ActionsProps {
  actions: Description;
  marked?: boolean;
}

export const Actions = ({ actions, marked = false }: ActionsProps) => {
  return (
    <ul className="stage-actions">
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
