import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Paragraph, cx } from './paragraph';

describe('Paragraph component', () => {
  it('renders without crashing', () => {
    render(<Paragraph />);
    const paragraph = screen.getByTestId('paragraph');

    expect(paragraph).toBeVisible();
  });

  it('displays correct text', () => {
    render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = screen.getByText('Test Paragraph');

    expect(paragraph).toBeVisible();
  });

  it('renders an empty p tag when no children provided', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('paragraph');

    expect(element.tagName).toBe('P');
    expect(element).toBeEmptyDOMElement();
    expect(element).toHaveClass(cx('paragraph'));
  });

  it('applies top spacing class when withTopSpacing is true', () => {
    render(<Paragraph withTopSpacing />);
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass(cx('top-spacing'));
  });

  it('does not apply top spacing class when withTopSpacing is false', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('paragraph');

    expect(element).not.toHaveClass(cx('top-spacing'));
  });

  it('applies custom className when provided', () => {
    render(<Paragraph className="custom-class" />);
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

  it('applies base paragraph class and additional classes correctly', () => {
    render(<Paragraph withTopSpacing className="custom-class" />);
    const element = screen.getByTestId('paragraph');

    expect(element).toHaveClass(cx('paragraph'));
    expect(element).toHaveClass(cx('top-spacing'));
    expect(element).toHaveClass('custom-class');
  });
});
