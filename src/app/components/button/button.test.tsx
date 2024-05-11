import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LinkBtn } from './button';
import { renderWithRouter } from '@/__tests__/utils';

describe('LinkBtn', () => {
  const label = 'Click me';
  const href = 'http://example.com';

  it('renders without crashing', () => {
    renderWithRouter(<LinkBtn label={label} href={href} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('displays the correct label text', () => {
    renderWithRouter(<LinkBtn label={label} href={href} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('renders correctly when given right props', () => {
    const label = 'Test Label';
    const href = 'http://test.com';
    const { getByRole } = renderWithRouter(<LinkBtn label={label} href={href} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', href);
    expect(link.textContent).toContain(label);
  });

  it('should have attribute', () => {
    const { getByRole } = renderWithRouter(<LinkBtn label={label} href={href} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveTextContent('Click me');
    expect(link).not.toHaveAttribute('target', '_blank');
  });
});
