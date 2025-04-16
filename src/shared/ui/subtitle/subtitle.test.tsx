import { cleanup, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Subtitle, cx } from './subtitle';

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

  it('applies medium font size class by default', () => {
    render(<Subtitle>Default Font Size</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('font-size-medium'));
  });

  it('applies correct font size classes when specified', () => {
    const sizes = ['extra-small', 'small', 'medium', 'large', 'extra-large'] as const;

    sizes.forEach((size) => {
      const { getByTestId } = render(
        <Subtitle fontSize={size}>
          {size}
          Font Size
        </Subtitle>,
      );
      const subtitle = getByTestId('subtitle');

      expect(subtitle).toHaveClass(cx(`font-size-${size}`));
      cleanup();
    });
  });

  it('applies custom className when provided', () => {
    render(<Subtitle className="custom-class">Custom Class</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass('custom-class');
  });

  it('applies multiple variant classes correctly', () => {
    render(
      <Subtitle fontSize="large" className="custom-class">
        Multiple Variants
      </Subtitle>,
    );
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('font-size-large'));
    expect(subtitle).toHaveClass('custom-class');
  });

  it('renders as h3 element by default', () => {
    render(<Subtitle>h3</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle.tagName).toBe('H3');
  });

  it.each(['h2', 'h3', 'h4'] as const)('renders as %s element', (tag) => {
    render(<Subtitle as={tag}>{tag}</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle.tagName).toBe(tag.toUpperCase());
  });
});
