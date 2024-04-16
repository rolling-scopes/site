import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tag } from './tag';

describe('Tag component', () => {
  it('renders the label correctly', () => {
    render(<Tag id="test-tag" label="Test Label" />);
    const tagElement = screen.getByText('Test Label');
    expect(tagElement).toBeVisible();
  });

  it('has the correct href attribute', () => {
    render(<Tag id="test-tag" label="Test Label" />);
    const tagElement = screen.getByText('Test Label');
    expect(tagElement).toHaveAttribute('href', '#test-tag');
  });
});
