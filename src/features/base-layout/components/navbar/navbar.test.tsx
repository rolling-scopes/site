import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from './navbar';
import { beforeEach, vi } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { useWindowSize } from '@/app/hooks';
import { Mock } from 'vitest';
import { act } from 'react-dom/test-utils';
import { Dropdown } from './dropdown';

vi.mock('@/app/hooks', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@/app/hooks')>();

  return {
    ...originalModule,
    useWindowSize: vi.fn(),
    useOutsideClick: vi.fn(() => ({ current: null }))
  };
});

describe('Navbar', () => {
  describe('Desktop view', () => {
    beforeEach(async () => {
      (useWindowSize as Mock).mockReturnValue({ width: 1280, height: 600 });
      await act(async () => renderWithRouter(<Navbar />));
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

    it('renders all the navbar links', () => {
      const navbarElement = screen.getAllByText(/.*/, { selector: 'div.label' });
      expect(navbarElement).toHaveLength(5);
    });

    // it('renders svg arrow', () => {
    //   const labelDiv = screen.getByText('About', { selector: 'div.label' });

    //   fireEvent.mouseOver(labelDiv);
    //   const svg = screen.getByLabelText('dropdown-arrow');

    //   expect(svg).toBeInTheDocument();
    //   expect(svg).toBeVisible();
    // });
  });

  describe('Mobile view', () => {
    beforeEach(async () => {
      (useWindowSize as Mock).mockReturnValue({ width: 800, height: 600 });
      await act(async () => renderWithRouter(<Navbar />));
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it('renders RsLogo in mobile view', async () => {
      const logoElement = screen.getAllByRole('img', { name: 'The Rolling Scopes School' });
      expect(logoElement).toHaveLength(2);
    });

    it('renders Burger menu', () => {
      const burger = screen.getByTestId('burger');
      expect(burger).toBeInTheDocument();
      expect(burger).toBeVisible();
    });

    it('add correct className to mobile-menu (.open)', () => {
      const burger = screen.getByTestId('burger');

      fireEvent.click(burger);
      const mobileMenu = screen.getByTestId('mobile-menu');
      expect(mobileMenu).toHaveClass('open');
    });
  });

  describe('Dropdown', () => {
    it('should be open when isDropdownOpen is true', async () => {
      await act(async () =>
        renderWithRouter(
          <Dropdown onMouseLeave={() => {}} isDropdownOpen={true} handleClose={() => {}} />
        )
      );

      const dropdownElement = screen.getByTestId('navbar-dropdown');
      expect(dropdownElement).toHaveClass('open');
    });
  });
});
