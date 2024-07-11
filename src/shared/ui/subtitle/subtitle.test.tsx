import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Subtitle } from './subtitle';

describe('Subtitle component', () => {
  it('renders without crashing', () => {
    render(<Subtitle>Test Subtitle</Subtitle>);
    const subtitle = screen.getByText('Test Subtitle');

    expect(subtitle).toBeInTheDocument();
  });

  it('displays correct text', () => {
    render(<Subtitle>Another Test Subtitle</Subtitle>);
    const text = screen.getByText('Another Test Subtitle');

    expect(text).toBeInTheDocument();
  });
});
