import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Subtitle } from './subtitle';

describe('Subtitle component', () => {
  it('renders without crashing', () => {
    render(<Subtitle text="Test Subtitle" />);
    const subtitle = screen.getByText('Test Subtitle');
    expect(subtitle).toBeInTheDocument();
  });

  it('displays correct text', () => {
    render(<Subtitle text="Another Test Subtitle" />);
    const text = screen.getByText('Another Test Subtitle');
    expect(text).toBeInTheDocument();
  });
});
