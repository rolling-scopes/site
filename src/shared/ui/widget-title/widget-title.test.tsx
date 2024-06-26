import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { WidgetTitle } from './widget-title';

import styles from './widget-title.module.scss';

describe('WidgetTitle component', () => {
  it('renders without crashing', () => {
    render(<WidgetTitle>TestTitle</WidgetTitle>);
    const title = screen.getByText('TestTitle');

    expect(title).toBeInTheDocument();
  });

  it('displays h2 tag', () => {
    render(<WidgetTitle />);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toBeInTheDocument();
  });

  it('displays size correctly when size=small', () => {
    render(<WidgetTitle size="small">TestTitle</WidgetTitle>);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(styles.small);
  });

  it('displays size correctly when size=medium', () => {
    render(<WidgetTitle size="medium">TestTitle</WidgetTitle>);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(styles.medium);
  });

  it('displays size correctly when size=large', () => {
    render(<WidgetTitle size="large">TestTitle</WidgetTitle>);
    const element = screen.getByRole('heading', { level: 2 });

    expect(element).toHaveClass(styles.large);
  });

  it('displays an asterisk when mods=asterisk', () => {
    render(<WidgetTitle mods="asterisk">TestTitle</WidgetTitle>);
    const asterisk = screen.getByRole('heading', { level: 2 });

    expect(asterisk).toHaveClass(styles.asterisk);
  });

  it('displays lines when mods=lines', () => {
    render(<WidgetTitle mods="lines">TestTitle</WidgetTitle>);
    const lines = screen.getByRole('heading', { level: 2 });

    expect(lines).toHaveClass(styles.lines);
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
