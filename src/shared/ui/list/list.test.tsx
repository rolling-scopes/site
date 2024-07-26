import { render, screen } from '@testing-library/react';
import { List } from './list';

describe('Actions Component', () => {
  it('renders action items correctly', () => {
    const actions = ['Action 1', 'Action 2', 'Action 3'];

    render(<List actions={actions} />);

    actions.forEach((action) => {
      expect(screen.getByText(action)).toBeInTheDocument();
    });
  });

  it('adds the marked class when marked prop is true', () => {
    render(<List actions={['Action']} marked={true} />);
    const actionsElement = screen.getByText('Action');

    expect(actionsElement).toHaveClass('marked');
  });
});
