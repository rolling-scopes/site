import { render, screen } from '@testing-library/react';
import { Step } from './step';

describe('Step Component', () => {
  it('renders step number correctly', () => {
    const testId = 1;

    render(<Step id={testId} />);

    expect(screen.getByText(testId.toString())).toBeInTheDocument();
  });
});
