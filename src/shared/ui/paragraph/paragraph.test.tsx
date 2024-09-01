import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Paragraph, cx } from './paragraph';

describe('Paragraph component', () => {
  it('renders without crashing', () => {
    render(<Paragraph />);
    const paragraph = screen.getByTestId('my-paragraph');

    expect(paragraph).toBeVisible();
  });

  it('displays correct text', () => {
    render(<Paragraph>Test Paragraph</Paragraph>);
    const paragraph = screen.getByText('Test Paragraph');

    expect(paragraph).toBeVisible();
  });

  it('displays p tag', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('my-paragraph');

    expect(element.tagName).toBe('P');
  });

  it('displays size correctly when size=small', () => {
    render(<Paragraph size="small" />);
    const element = screen.getByTestId('my-paragraph');

    expect(element).toHaveClass(cx('small'));
  });

  it('displays size correctly when size=medium (default)', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('my-paragraph');

    expect(element).toHaveClass(cx('medium'));
  });

  it('applies custom className when provided', () => {
    render(<Paragraph className="custom-class" />);
    const element = screen.getByTestId('my-paragraph');

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

  it('applies both size and custom classes correctly', () => {
    render(<Paragraph size="small" className="custom-class" />);
    const element = screen.getByTestId('my-paragraph');

    expect(element).toHaveClass(cx('small'));
    expect(element).toHaveClass('custom-class');
  });

  it('renders an empty paragraph when no children provided', () => {
    render(<Paragraph />);
    const element = screen.getByTestId('my-paragraph');

    expect(element).toBeEmptyDOMElement();
  });
});
