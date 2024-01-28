import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PrincipleCard } from './PrincipleCard';
import { ReactNode } from 'react';

describe('PrincipleCard component', () => {
  const mockIcon: ReactNode = <div>mockIcon</div>;

  const mockProps = {
    title: 'TestTitle',
    description: 'Test description for the card.',
    icon: mockIcon
  };

  it('renders correct icon', () => {
    render(<PrincipleCard {...mockProps} />);
    const icon = screen.getByText('mockIcon');
    expect(icon).toBeInTheDocument();
  });

  it('displays correct title', () => {
    render(<PrincipleCard {...mockProps} />);
    const title = screen.getByText('TestTitle');
    expect(title).toBeInTheDocument();
  });

  it('displays correct description', () => {
    render(<PrincipleCard {...mockProps} />);
    const description = screen.getByText('Test description for the card.');
    expect(description).toBeInTheDocument();
  });
});
