import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button, ButtonOutlined } from './button';

describe('Button', () => {
  const label = 'Click me';
  const href = 'http://example.com';

  it('renders without crashing and displays the correct label text', () => {
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

describe('ButtonOutlined', () => {
  it('should render correctly', () => {
    render(<ButtonOutlined label="Test" href="http://test.com" />);
    const button = screen.getByRole('link', { name: /Test/i });
    expect(button).toBeInTheDocument();
  });

  it('should have correct label and href properties', () => {
    render(<ButtonOutlined label="Test" href="http://test.com" />);
    const button = screen.getByRole('link', { name: /Test/i });
    expect(button).toHaveAttribute('href', 'http://test.com');
    expect(button).toHaveTextContent('Test');
  });

  it('should display an arrow symbol', () => {
    render(<ButtonOutlined label="Test" href="http://test.com" />);
    const arrow = document.getElementById('btn-arrow');
    expect(arrow).toBeInTheDocument();
  });
});
