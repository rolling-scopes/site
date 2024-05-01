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
      {actions.map((action, index) => (
        <li key={index}>
          {typeof action === 'string' ? <>{action}</> : <ClickableText data={action} />}
        </li>
      ))}
    </ul>
  );
};
