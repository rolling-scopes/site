import { act } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import classNames from 'classnames/bind';
import { beforeEach } from 'vitest';
import { DropdownWrapper } from './dropdown/dropdown-wrapper';
import { Header } from './header';
import { mockedCourses } from '@/shared/__tests__/constants.ts';
import { renderWithRouter } from '@/shared/__tests__/utils';

import stylesDropdown from './dropdown/dropdown-wrapper.module.scss';
import stylesHeader from './header.module.scss';
import stylesNavItem from './nav-item/nav-item.module.scss';

const cxDropdown = classNames.bind(stylesDropdown);
const cxHeader = classNames.bind(stylesHeader);
const cxNavItem = classNames.bind(stylesNavItem);

describe('Header', () => {
  describe('Desktop view', () => {
    beforeEach(() => {
      renderWithRouter(<Header courses={mockedCourses} />);
    });

    it('renders without crashing', () => {
      const headerElement = screen.getByTestId('navigation');

      expect(headerElement).toBeInTheDocument();
    });

    it('set color as gray when scrollbar is at the top', () => {
      const headerElement = screen.getByTestId('navigation');

      expect(headerElement).toHaveClass(cxHeader('gray'));
    });

    it('renders all the header links', () => {
      const headerElement = screen.getAllByText(/.*/, { selector: `span.${cxNavItem('label')}` });

      expect(headerElement).toHaveLength(3);
    });

    it('renders 3 svg arrows', () => {
      const svg = screen.getAllByLabelText('dropdown-arrow');

      expect(svg).toHaveLength(3);
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
        renderWithRouter(
          <DropdownWrapper onMouseEnter={() => {}} onMouseLeave={() => {}} isOpen={true}>
            TEST
          </DropdownWrapper>,
        ),
      );

      const dropdownElement = screen.getByTestId('header-dropdown');

      expect(dropdownElement).toHaveClass(cxDropdown('open'));
    });
  });
});
