import { act } from 'react-dom/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { Mock, beforeEach, vi } from 'vitest';
import { DropdownMenu } from './dropdown/dropdown';
import { Header } from './header';
import { renderWithRouter } from '@/__tests__/utils';
import { useWindowSize } from '@/app/hooks';

import stylesDropdown from './dropdown/dropdown.module.scss';
import stylesHeader from './header.module.scss';
import stylesNavItem from './nav-item/nav-item.module.scss';

vi.mock('@/app/hooks', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@/app/hooks')>();

  return {
    ...originalModule,
    useWindowSize: vi.fn(),
    useOutsideClick: vi.fn(() => ({ current: null })),
  };
});

describe('Header', () => {
  describe('Desktop view', () => {
    beforeEach(async () => {
      (useWindowSize as Mock).mockReturnValue({ width: 1280, height: 600 });
      await act(async () => renderWithRouter(<Header />));
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it('renders without crashing', () => {
      const headerElement = screen.getByTestId('navigation');
      expect(headerElement).toBeInTheDocument();
    });

    it('renders RsLogo', () => {
      const logoElement = screen.getByTestId('logo-header');
      expect(logoElement).toBeInTheDocument();
    });

    it('set color as gray when scrollbar is at the top', () => {
      const headerElement = screen.getByTestId('navigation');
      expect(headerElement).toHaveClass(stylesHeader.gray);
    });

    it('renders all the header links', () => {
      const headerElement = screen.getAllByText(/.*/, { selector: `p.${stylesNavItem.label}` });
      expect(headerElement).toHaveLength(4);
    });

    it('renders svg arrow', () => {
      const labelDiv = screen.getByText('About', { selector: `p.${stylesNavItem.label}` });

      fireEvent.mouseOver(labelDiv);
      const svg = screen.getByLabelText('dropdown-arrow');

      expect(svg).toBeInTheDocument();
      expect(svg).toBeVisible();
    });
  });

  describe('Mobile view', () => {
    beforeEach(async () => {
      (useWindowSize as Mock).mockReturnValue({ width: 800, height: 600 });
      await act(async () => renderWithRouter(<Header />));
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    it('renders RsLogo in mobile view', async () => {
      const logoElement = screen.getAllByTestId('logo-header');
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
      expect(mobileMenu).toHaveClass(stylesHeader.open);
      fireEvent.click(burger);
      expect(mobileMenu).not.toHaveClass(stylesHeader.open);
    });
  });

  describe('Dropdown', () => {
    it('should be open when isDropdownOpen is true', async () => {
      await act(async () =>
        renderWithRouter(
          <DropdownMenu
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            isOpen={true}
            onClose={() => {}}
          />,
        ),
      );

      const dropdownElement = screen.getByTestId('header-dropdown');
      expect(dropdownElement).toHaveClass(stylesDropdown.open);
    });
  });
});
