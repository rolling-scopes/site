import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BaseLayout } from './base-layout';

vi.mock('react-router-dom', () => ({
  Outlet: vi.fn(() => <div data-testid="mockOutlet" />),
  useLocation: vi.fn(() => ({ hash: 'testHash' })),
  ScrollRestoration: vi.fn(() => null),
}));

vi.mock('./components/header', () => ({
  Header: vi.fn(() => <div data-testid="mockHeader" />),
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

  it('renders Header component', () => {
    expect(screen.getByTestId('mockHeader')).toBeInTheDocument();
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
