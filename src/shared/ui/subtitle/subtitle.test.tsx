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

    expect(subtitle).toHaveClass(cx('medium-font-size'));
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

      expect(subtitle).toHaveClass(cx(`${size}-font-size`));
      cleanup();
    });
  });

  it('applies gray color class by default', () => {
    render(<Subtitle>Default Color</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('gray-600'));
  });

  it('applies black color class when specified', () => {
    render(<Subtitle color="black">Black Color</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('black'));
  });

  it('applies custom className when provided', () => {
    render(<Subtitle className="custom-class">Custom Class</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass('custom-class');
  });

  it('applies multiple variant classes correctly', () => {
    render(
      <Subtitle fontSize="large" color="black" className="custom-class">
        Multiple Variants
      </Subtitle>,
    );
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('large-font-size'));
    expect(subtitle).toHaveClass(cx('black'));
    expect(subtitle).toHaveClass('custom-class');
  });

  it('renders as h3 element', () => {
    render(<Subtitle>H3 Element</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle.tagName).toBe('H3');
  });
});
