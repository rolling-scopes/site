import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Logo, cx } from './logo.tsx';

describe('Logo component', () => {
  it('renders without crashing', () => {
    render(<Logo />, { wrapper: BrowserRouter });
    const altLogoText = screen.getByAltText('RSS-logo');

    expect(altLogoText).toBeInTheDocument();
  });

  it('displays correctly when not have type', () => {
    render(<Logo />, { wrapper: BrowserRouter });
    const element = screen.getByTestId('logo');

    expect(element).not.toHaveClass(cx('with-border'));
  });

  it('displays correctly when type=with-border', () => {
    render(<Logo type="with-border" />, { wrapper: BrowserRouter });
    const element = screen.getByTestId('logo');

    expect(element).toHaveClass(cx('with-border'));
  });
});
