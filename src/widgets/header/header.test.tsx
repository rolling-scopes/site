import { act } from 'react';
import { fireEvent, screen, within } from '@testing-library/react';
import classNames from 'classnames/bind';
import { beforeEach } from 'vitest';

import { Header } from './header';
import { DropdownWrapper } from './ui/dropdown/dropdown-wrapper';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

import stylesHeader from './header.module.scss';
import stylesDropdown from './ui/dropdown/dropdown-wrapper.module.scss';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

const cxDropdown = classNames.bind(stylesDropdown);
const cxHeader = classNames.bind(stylesHeader);

describe('Header', () => {
  describe('Desktop view', () => {
    beforeEach(() => {
      renderWithRouter(<Header courses={mockedCourses} />);
    });

    it('renders without crashing', () => {
      const headerElement = screen.getByTestId('navigation');

      expect(headerElement).toBeInTheDocument();
    });

    it('renders all the header links', () => {
      const headerElement = screen.getAllByTestId('label-content');

      expect(headerElement).toHaveLength(6);
    });

    it('renders 5 svg arrows', () => {
      const desktopMenu = screen.getByTestId('desktop-menu');
      const svg = within(desktopMenu).getAllByLabelText('dropdown-arrow');

      expect(svg).toHaveLength(5);
    });
  });

  describe('Mobile view', () => {
    beforeEach(async () => {
      await act(async () => renderWithRouter(<Header courses={mockedCourses} />));
    });

    it('renders RsLogo in mobile view', async () => {
      const logoElement = screen.getAllByTestId('logo');

      expect(logoElement).toHaveLength(2);
    });

    it('renders Burger menu', () => {
      const burger = screen.getByTestId('burger');

      expect(burger).toBeInTheDocument();
      expect(burger).toBeVisible();
    });

    it('renders 5 svg arrows', () => {
      const mobileMenu = screen.getByTestId('mobile-menu');
      const svg = within(mobileMenu).getAllByLabelText('dropdown-arrow');

      expect(svg).toHaveLength(5);
    });

    it('add correct className to mobile-menu (.open)', () => {
      const burger = screen.getByTestId('burger');

      fireEvent.click(burger);
      const mobileMenu = screen.getByTestId('mobile-menu');

      expect(mobileMenu).toHaveClass(cxHeader('open'));
      fireEvent.click(burger);
      expect(mobileMenu).not.toHaveClass(cxHeader('open'));
    });
  });

  describe('Dropdown', () => {
    it('should be open when isDropdownOpen is true', async () => {
      await act(async () =>
        renderWithRouter(<DropdownWrapper isOpen={true} reverseLayout={false}>TEST</DropdownWrapper>),
      );

      const dropdownElement = screen.getByTestId('header-dropdown');

      expect(dropdownElement).toHaveClass(cxDropdown('open'));
    });
  });
});
