import { render, screen } from '@testing-library/react';
import { ButtonOutlined } from './button-outlined';
import { describe, expect, it } from 'vitest';

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
    const arrow = screen.getByText('arrow_forward');
    expect(arrow).toBeInTheDocument();
  });
});
