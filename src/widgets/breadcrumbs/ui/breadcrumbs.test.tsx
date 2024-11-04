import { screen } from '@testing-library/react';
import { Breadcrumbs } from './breadcrumbs';
import { breadcrumbNameMap } from '../constants';
import { ROUTES } from '@/core/const';
import { renderWithRouter } from '@/shared/__tests__/utils';

const mockUsePathname = vi.fn();
const unmappedRoute = '/unmapped-route';
const nodejsCourseRoute = `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`;

vi.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe.skip('Breadcrumbs', () => {
  it('renders "Home"', () => {
    mockUsePathname.mockImplementation(() => ROUTES.HOME);

    renderWithRouter(<Breadcrumbs />, { route: ROUTES.HOME });
    const homeLink = screen.getByText(/Home/i);

    expect(homeLink).toBeInTheDocument();
  });

  Object.entries(breadcrumbNameMap).forEach(([route, breadcrumb]) => {
    it(`renders mapped Breadcrumb for /${route}`, () => {
      mockUsePathname.mockImplementation(() => `/${route}`);

      renderWithRouter(<Breadcrumbs />, { route });
      const breadcrumbLink = screen.getByText(breadcrumb);

      expect(breadcrumbLink).toBeInTheDocument();
    });
  });

  it('renders un-mapped Breadcrumbs', () => {
    mockUsePathname.mockImplementation(() => unmappedRoute);

    renderWithRouter(<Breadcrumbs />, { route: unmappedRoute });
    const unmappedBreadcrumb = screen.getByText(/unmapped-route/i);

    expect(unmappedBreadcrumb).toBeInTheDocument();
  });

  it.skip('renders Breadcrumbs for nested route', () => {
    mockUsePathname.mockImplementation(() => nodejsCourseRoute);

    renderWithRouter(<Breadcrumbs />, { route: nodejsCourseRoute });
    const parentBreadcrumb = screen.getByText(breadcrumbNameMap[ROUTES.COURSES]);
    const childBreadcrumb = screen.getByText(breadcrumbNameMap[ROUTES.NODE_JS]);

    expect(parentBreadcrumb).toBeInTheDocument();
    expect(childBreadcrumb).toBeInTheDocument();
  });
});
