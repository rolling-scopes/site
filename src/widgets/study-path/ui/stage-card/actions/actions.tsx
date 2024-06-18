import './actions.scss';

interface ActionsProps {
  actions: string[];
  marked?: boolean;
}
export const Actions = ({ actions, marked = false }: ActionsProps) => {
  return (
    <ul className={`stage-actions ${marked ? 'marked' : ''}`}>
      {actions.map((action, index) => (
        <li key={index}>{action}</li>
      ))}
    </ul>
  );
};
