import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { BaseLayout } from './base-layout';
import { ROUTES } from '@/shared/constants';

const mockUsePathname = vi.fn();

vi.mock('@/widgets/header', () => ({ Header: vi.fn(() => <div data-testid="mockHeader" />) }));

vi.mock('@/widgets/partnered', () => ({ Partnered: vi.fn(() => <div data-testid="mockPartnered" />) }));

vi.mock('@/widgets/footer', () => ({ Footer: vi.fn(() => <div data-testid="mockFooter" />) }));

vi.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('BaseLayout', () => {
  beforeEach(async () => {
    mockUsePathname.mockImplementation(() => ROUTES.HOME);
    const baseLayout = await BaseLayout({ children: null });

    render(baseLayout);
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
