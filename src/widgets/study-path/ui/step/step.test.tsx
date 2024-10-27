import { render, screen } from '@testing-library/react';
import { Step } from './step.tsx';

describe('Step Component', () => {
  it('renders step number correctly', () => {
    const testId = 1;

    render(<Step id={testId} />);

    expect(screen.getByText(testId.toString())).toBeInTheDocument();
  });
});
