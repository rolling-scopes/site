import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WidgetTitle, cx } from './widget-title';

describe('WidgetTitle component', () => {
  it('renders without crashing', () => {
    render(<WidgetTitle />);
    const title = screen.getByTestId('widget-title');

    expect(title).toBeVisible();
  });

  it('displays correct text', () => {
    render(<WidgetTitle>Test Title</WidgetTitle>);
    const title = screen.getByText('Test Title');

    expect(title).toBeVisible();
  });

  it('displays h2 tag', () => {
    render(<WidgetTitle />);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toBeInTheDocument();
  });

  it('displays size correctly when size=small', () => {
    render(<WidgetTitle size="small" />);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(cx('small'));
  });

  it('displays size correctly when size=medium (default)', () => {
    render(<WidgetTitle />);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(cx('medium'));
  });

  it('displays size correctly when size=large', () => {
    render(<WidgetTitle size="large" />);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(cx('large'));
  });

  it('displays an asterisk when mods=asterisk', () => {
    render(<WidgetTitle mods="asterisk" />);
    const asterisk = screen.getByRole('heading', { level: 2 });

    expect(asterisk).toHaveClass(cx('asterisk'));
  });

  it('displays lines when mods=lines', () => {
    render(<WidgetTitle mods="lines" />);
    const lines = screen.getByRole('heading', { level: 2 });

    expect(lines).toHaveClass(cx('lines'));
  });

  it('renders children correctly', () => {
    render(
      <WidgetTitle>
        <div>Child element</div>
      </WidgetTitle>,
    );

    const child = screen.getByText('Child element');

    expect(child).toBeInTheDocument();
  });
});
