import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Subtitle } from './subtitle';

describe('Subtitle component', () => {
  it('renders without crashing', () => {
    render(<Subtitle>Test Subtitle</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toBeInTheDocument();
  });

  it('displays correct text', () => {
    const testText = 'Another Test Subtitle';

    render(<Subtitle>{testText}</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveTextContent(testText);
  });
});
