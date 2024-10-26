import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BaseLayout } from './base-layout';
import { ROUTES } from '@/core/const';

const mockUsePathname = vi.fn();

vi.mock('./components/header', () => ({ Header: vi.fn(() => <div data-testid="mockHeader" />) }));

vi.mock('./components/partnered', () => ({ Partnered: vi.fn(() => <div data-testid="mockPartnered" />) }));

vi.mock('./components/footer', () => ({ Footer: vi.fn(() => <div data-testid="mockFooter" />) }));

vi.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('BaseLayout', () => {
  beforeEach(() => {
    mockUsePathname.mockImplementation(() => ROUTES.HOME);
    render(<BaseLayout>{null}</BaseLayout>);
  });

  it('renders Header component', () => {
    expect(screen.getByTestId('mockHeader')).toBeInTheDocument();
  });

  it('renders Partnered component', () => {
    expect(screen.getByTestId('mockPartnered')).toBeInTheDocument();
  });

  it('renders Footer component', () => {
    expect(screen.getByTestId('mockFooter')).toBeInTheDocument();
  });
});
