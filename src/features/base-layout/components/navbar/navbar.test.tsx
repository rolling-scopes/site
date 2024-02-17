import { screen } from '@testing-library/react';
import { Navbar } from './navbar';
import { beforeEach, vi } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { useWindowSize } from '@/app/hooks';
import { Mock } from 'vitest';

vi.mock('@/app/hooks', () => ({
  useWindowSize: vi.fn()
}));

describe('Navbar', () => {
  beforeEach(() => {
    (useWindowSize as Mock).mockReturnValue({ width: 800, height: 600 });
    renderWithRouter(<Navbar />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const navbarElement = screen.getByTestId('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders RsLogo', () => {
    const logoElement = screen.getByRole('img', { name: 'The Rolling Scopes School' });
    expect(logoElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });

  it('set color as gray when scrollbar is at the top', () => {
    const navbarElement = screen.getByTestId('navigation');
    expect(navbarElement).toHaveClass('gray');
  });
});
