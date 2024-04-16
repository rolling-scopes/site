import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  const label = 'Click me';
  const href = 'http://example.com';

  it('renders without crashing', () => {
    render(<Button label={label} href={href} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('displays the correct label text', () => {
    render(<Button label={label} href={href} />);
    expect(screen.getByText(label)).toBeDefined();
  });

  it('renders correctly when given right props', () => {
    const label = 'Test Label';
    const href = 'http://test.com';
    const { getByRole } = render(<Button label={label} href={href} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('href', href);
    expect(link.textContent).toContain(label);
  });

  it('should have attribute', () => {
    const { getByRole } = render(<Button label={label} href={href} />);
    const link = getByRole('link');

    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveTextContent('Click me');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
