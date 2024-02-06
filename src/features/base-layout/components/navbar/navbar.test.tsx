import { cleanup, screen } from '@testing-library/react';
import { Navbar } from './navbar';
import { afterEach, beforeEach } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';

afterEach(() => {
  cleanup();
});

describe('Navbar', () => {
  beforeEach(() => {
    renderWithRouter(<Navbar />);
  });
  it('renders without crashing', () => {
    const navbarElement = screen.getByTestId('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders RsLogo', () => {
    const logoElement = screen.getAllByLabelText('logo-navbar');
    expect(logoElement).toHaveLength(2);
  });

  it('set color as gray when scrollbar is at the top', () => {
    const navbarElement = screen.getByTestId('navigation');
    expect(navbarElement).toHaveClass('gray');
  });
});
