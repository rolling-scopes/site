import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BaseLayout } from './base-layout';

vi.mock('react-router-dom', () => ({
  Outlet: vi.fn(() => <div data-testid="mockOutlet" />),
  useLocation: vi.fn(() => ({ hash: 'testHash' })),
  ScrollRestoration: vi.fn(() => null),
}));

vi.mock;

vi.mock('./components/navbar', () => ({
  Navbar: vi.fn(() => <div data-testid="mockNavbar" />),
}));

vi.mock('./components/partnered', () => ({
  Partnered: vi.fn(() => <div data-testid="mockPartnered" />),
}));

vi.mock('./components/footer', () => ({
  Footer: vi.fn(() => <div data-testid="mockFooter" />),
}));

describe('BaseLayout', () => {
  beforeEach(() => {
    render(<BaseLayout />);
  });

  it('renders Navbar component', () => {
    expect(screen.getByTestId('mockNavbar')).toBeInTheDocument();
  });

  it('renders Outlet component', () => {
    expect(screen.getByTestId('mockOutlet')).toBeInTheDocument();
  });

  it('renders Partnered component', () => {
    expect(screen.getByTestId('mockPartnered')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    expect(screen.getByTestId('mockFooter')).toBeInTheDocument();
  });
});
