import { render, screen } from '@testing-library/react';
import { Actions } from './actions';

describe('Actions Component', () => {
  it('renders action items correctly', () => {
    const actions = ['Action 1', 'Action 2', 'Action 3'];
    render(<Actions actions={actions} />);

    actions.forEach((action) => {
      expect(screen.getByText(action)).toBeInTheDocument();
    });
  });

  it('adds the marked class when marked prop is true', () => {
    render(<Actions actions={['Action']} marked={true} />);
    const actionsElement = screen.getByText('Action').parentElement;
    expect(actionsElement).toHaveClass('marked');
  });
});
