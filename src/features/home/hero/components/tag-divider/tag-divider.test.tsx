import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { TagDivider } from './tag-divider';

describe('TagDivider', () => {
  it('renders correctly', () => {
    render(<TagDivider />);
    const dividerElement = screen.getByText('*');
    expect(dividerElement).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    render(<TagDivider />);
    const dividerElement = screen.getByText('*');
    expect(dividerElement.parentElement).toHaveClass('tag-divider');
  });
});
