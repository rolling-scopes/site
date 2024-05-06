import { ClickableText } from '../clickable-text';
import { Description } from '@/features/required/required.types';

import './actions.scss';

interface ActionsProps {
  actions: Description;
  marked?: boolean;
}
export const Actions = ({ actions, marked = false }: ActionsProps) => {
  return (
    <ul className={`stage-actions ${marked ? 'marked' : ''}`}>
      {actions.map((action) => {
        const isLink = typeof action !== 'string';
        const itemClassName = isLink ? 'marked' : undefined;
        const keyAction = isLink ? action[0].id : action;

        return (
          <li className={itemClassName} key={keyAction}>
            {isLink ? <ClickableText data={action} /> : <>{action}</>}
          </li>
        );
      })}
    </ul>
  );
};
