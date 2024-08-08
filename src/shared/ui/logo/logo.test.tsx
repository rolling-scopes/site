import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Logo, cx } from './logo.tsx';
import logo from '@/shared/assets/svg/rss-logo.svg';

describe('Logo component', () => {
  it('renders without crashing', () => {
    render(<Logo><img src={logo} alt="RSS-logo" /></Logo>);
    const altLogoText = screen.getByAltText('RSS-logo');

    expect(altLogoText).toBeInTheDocument();
  });

  it('displays correctly when default type', () => {
    render(<Logo><img src={logo} alt="logo" /></Logo>);
    const element = screen.getByTestId('logo-default');

    expect(element).not.toHaveClass(cx('with-border'));
  });

  it('displays correctly when type=with-border', () => {
    render(<Logo type="with-border"><img src={logo} alt="logo" /></Logo>);
    const element = screen.getByTestId('logo-with-border');

    expect(element).toHaveClass(cx('with-border'));
  });
});
