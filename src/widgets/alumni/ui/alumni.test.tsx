import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alumni } from './alumni';

describe('Alumni', () => {
  beforeEach(() => {
    render(<Alumni />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Our alumni');

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the paragraph correctly', () => {
    const paragraphElement = screen.getByText(/We are immensely proud of RS School alumni/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders all images for large screens', () => {
    const imageElements = screen.getAllByRole('img');

    expect(imageElements).toHaveLength(18);
  });
});
