import { screen } from '@testing-library/react';
import { Breadcrumbs } from './breadcrumbs';
import { renderWithRouter } from '@/__tests__/utils';
import { route } from '@/app/const';

const breadcrumbNameMap: Record<string, string> = {
  courses: 'RS School',
  nodejs: 'Node.js Course',
  'javascript-mentoring-program': 'JavaScript Mentoring Program',
  'javascript-preschool': 'JavaScript Pre-school',
  angular: 'Angular Course',
  'aws-cloud-developer': 'AWS Cloud Developer Course',
};

describe('Breadcrumbs', () => {
  it('renders "Home"', async () => {
    renderWithRouter(<Breadcrumbs />, { route: route.HOME });
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
    renderWithRouter(<Breadcrumbs />, { route: `/${route.COURSES}/${route.NODE_JS}` });
    const parentBreadcrumb = screen.getByText(breadcrumbNameMap[route.COURSES]);
    const childBreadcrumb = screen.getByText(breadcrumbNameMap[route.NODE_JS]);
    expect(parentBreadcrumb).toBeInTheDocument();
    expect(childBreadcrumb).toBeInTheDocument();
  });
});
