import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alumni } from './alumni';

describe('Alumni', () => {
  it('renders the title correctly', () => {
    render(<Alumni />);
    const titleElement = screen.getByText('Our alumni');

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the paragraph correctly', () => {
    render(<Alumni />);
    const paragraphElement = screen.getByText(/We are immensely proud of RS School alumni/i);

    expect(paragraphElement).toBeInTheDocument();
  });
});
