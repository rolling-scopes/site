import { render, screen } from '@testing-library/react';
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

  it('applies small font size class by default', () => {
    render(<Subtitle>Default Font Size</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('small-font-size'));
  });

  it('applies large font size class when specified', () => {
    render(<Subtitle fontSize="large">Large Font Size</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('large-font-size'));
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

  it('applies without-padding class when specified', () => {
    render(<Subtitle withoutPadding>Without Padding</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('without-padding'));
  });

  it('applies custom className when provided', () => {
    render(<Subtitle className="custom-class">Custom Class</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass('custom-class');
  });

  it('applies multiple variant classes correctly', () => {
    render(
      <Subtitle fontSize="large" color="black" withoutPadding>
        Multiple Variants
      </Subtitle>,
    );
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle).toHaveClass(cx('large-font-size'));
    expect(subtitle).toHaveClass(cx('black'));
    expect(subtitle).toHaveClass(cx('without-padding'));
  });

  it('renders as h3 element', () => {
    render(<Subtitle>H3 Element</Subtitle>);
    const subtitle = screen.getByTestId('subtitle');

    expect(subtitle.tagName).toBe('H3');
  });
});
