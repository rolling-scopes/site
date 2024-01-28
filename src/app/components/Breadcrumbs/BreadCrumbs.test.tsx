import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Breadcrumbs', () => {
  it("shouldn't render if there is only one crumb or less", () => {
    const crumbs = [{ label: 'Home', path: '/' }];
    const { queryByRole } = render(
      <Router>
        <Breadcrumbs crumbs={crumbs} />
      </Router>
    );
    const nav = queryByRole('navigation');
    expect(nav).toBeNull();
  });

  it('should render when there is more than one crumb', () => {
    const crumbs = [
      { label: 'Home', path: '/' },
      { label: 'Courses', path: '/courses' }
    ];
    const { queryByRole } = render(
      <Router>
        <Breadcrumbs crumbs={crumbs} />
      </Router>
    );
    const nav = queryByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('should render with correct labels and paths', () => {
    const crumbs = [
      { label: 'Home', path: '/' },
      { label: 'Courses', path: '/courses' },
      { label: 'Details', path: '/details' }
    ];

    render(
      <Router>
        <Breadcrumbs crumbs={crumbs} />
      </Router>
    );

    crumbs.slice(0, -1).forEach((crumb) => {
      const link = screen.getByText(crumb.label);
      expect(link).toHaveAttribute('href', crumb.path);
      expect(link.parentNode).toHaveTextContent('/');
    });
    const lastCrumb = crumbs[crumbs.length - 1];
    const disabledLink = screen.getByText(lastCrumb.label);
    expect(disabledLink).toHaveAttribute('class', 'link disabled');

    const links = screen.queryAllByRole('link');
    expect(links.length).toBe(crumbs.length - 1);

    const separators = screen.getAllByText('/', { exact: false });
    expect(separators.length).toBe(crumbs.length - 1);
  });
});
