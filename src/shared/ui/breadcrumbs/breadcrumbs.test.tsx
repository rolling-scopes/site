import { screen } from '@testing-library/react';
import { Breadcrumbs } from './breadcrumbs';
import { breadcrumbNameMap } from './constants';
import { ROUTES } from '@/app/const';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Breadcrumbs', () => {
  it('renders "Home"', async () => {
    renderWithRouter(<Breadcrumbs />, { route: ROUTES.HOME });
    const homeLink = await screen.findByText(/Home/i);

    expect(homeLink).toBeInTheDocument();
  });

  Object.entries(breadcrumbNameMap).forEach(([route, breadcrumb]) => {
    it(`renders mapped Breadcrumb for /${route}`, () => {
      renderWithRouter(<Breadcrumbs />, { route: `/${route}` });
      const breadcrumbLink = screen.getByText(breadcrumb);

      expect(breadcrumbLink).toBeInTheDocument();
    });
  });

  test('renders un-mapped Breadcrumbs', () => {
    renderWithRouter(<Breadcrumbs />, { route: '/unmapped-route' });
    const unmappedBreadcrumb = screen.getByText(/unmapped-route/i);

    expect(unmappedBreadcrumb).toBeInTheDocument();
  });

  test('renders Breadcrumbs for nested route', () => {
    renderWithRouter(<Breadcrumbs />, { route: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}` });
    const parentBreadcrumb = screen.getByText(breadcrumbNameMap[ROUTES.COURSES]);
    const childBreadcrumb = screen.getByText(breadcrumbNameMap[ROUTES.NODE_JS]);

    expect(parentBreadcrumb).toBeInTheDocument();
    expect(childBreadcrumb).toBeInTheDocument();
  });
});
