import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Paragraph, cx } from './paragraph';

describe('Paragraph component', () => {
  it('renders an empty p tag with correct classes when no children provided', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('paragraph');

    expect(element).toBeVisible();
    expect(element.tagName).toBe('P');
    expect(element).toBeEmptyDOMElement();
    expect(element).toHaveClass(cx('paragraph'));
    expect(element).toHaveClass(cx('medium-font-size'));
  });

  it('displays correct text', () => {
    render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = screen.getByText('Test Paragraph');

    expect(paragraph).toBeVisible();
  });

  it('applies medium font size class by default', () => {
    render(<Paragraph>Default Font Size</Paragraph>);
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass(cx('medium-font-size'));
  });

  it('applies large font size class when specified', () => {
    render(<Paragraph fontSize="large">Large Font Size</Paragraph>);
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass(cx('large-font-size'));
  });

  it('applies custom className when provided', () => {
    render(<Paragraph className="custom-class">Custom Class</Paragraph>);
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    render(
      <Paragraph>
        <span>Child element</span>
      </Paragraph>,
    );

    const child = screen.getByText('Child element');

    expect(child).toBeInTheDocument();
  });

  it('applies base paragraph class, font size class, and custom class correctly', () => {
    render(
      <Paragraph fontSize="large" className="custom-class">
        Combined Classes
      </Paragraph>,
    );
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass(cx('paragraph'));
    expect(element).toHaveClass(cx('large-font-size'));
    expect(element).toHaveClass('custom-class');
  });

  it('does not apply large font size class when fontSize is medium', () => {
    render(<Paragraph fontSize="medium">Medium Font Size</Paragraph>);
    const element = screen.getByTestId('paragraph');

    expect(element).not.toHaveClass(cx('large-font-size'));
    expect(element).toHaveClass(cx('medium-font-size'));
  });
});
