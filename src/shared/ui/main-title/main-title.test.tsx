import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainTitle, cx } from './main-title';

describe('MainTitle component', () => {
  it('renders without crashing', () => {
    render(<MainTitle />);
    const title = screen.getByTestId('main-title');

    expect(title).toBeInTheDocument();
  });

  it('displays h1 tag', () => {
    render(<MainTitle />);
    const element = screen.getByRole('heading', { level: 1 });

    expect(element).toBeInTheDocument();
  });

  it('displays styles correctly', () => {
    render(<MainTitle />);
    const element = screen.getByRole('heading', { level: 1 });

    expect(element).toHaveClass(cx('main-title'));
  });

  it('renders children correctly', () => {
    render(
      <MainTitle>
        <div>Child element</div>
      </MainTitle>,
    );

    const child = screen.getByText('Child element');

    expect(child).toBeInTheDocument();
  });
});
