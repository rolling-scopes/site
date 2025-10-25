import { screen } from '@testing-library/react';

import { SchoolMenu } from '../school-menu/school-menu';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { schoolMenuStaticLinks } from 'data';

describe('SchoolMenu', () => {
  it('renders without crashing and displays "rs school" heading', () => {
    renderWithRouter(
      <SchoolMenu heading="rs school">
        {schoolMenuStaticLinks['en-US'].map((link) => (
          <SchoolMenu.Item
            key={link.title}
            title={link.title}
            description={link.description}
            url={link.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const headingElement = screen.getByRole('heading', { name: /rs school/i });

    expect(headingElement).toBeInTheDocument();
  });

  it('displays correct links and descriptions with "rs school" props', () => {
    const { container } = renderWithRouter(
      <SchoolMenu heading="rs school">
        {schoolMenuStaticLinks['en-US'].map((link) => (
          <SchoolMenu.Item
            key={link.title}
            title={link.title}
            description={link.description}
            url={link.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(4);

    expect(container.getElementsByTagName('small')).toHaveLength(4);
  });

  it('renders without crashing and displays "all courses" heading', () => {
    renderWithRouter(
      <SchoolMenu heading="all courses">
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={course.startDate}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const headingElement = screen.getByRole('heading', { name: /all courses/i });

    expect(headingElement).toBeInTheDocument();
  });

  it('renders [mentorshipId] correct when "all courses" heading is passed', () => {
    renderWithRouter(
      <SchoolMenu heading="all courses">
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={course.startDate}
            icon={course.iconSmall}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const images = screen.getAllByTestId('school-item-icon');

    expect(images).toHaveLength(mockedCourses.length);
    images.forEach((img) => expect(img).toHaveAttribute('aria-hidden', 'true'));
  });

  it('renders correct link description when date is passed', () => {
    renderWithRouter(
      <SchoolMenu>
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={course.startDate}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const descriptions = screen.getAllByTestId('school-item-description');

    expect(descriptions).toHaveLength(mockedCourses.length);
    expect(descriptions[0]).toHaveTextContent(/Jun 24, 2024/i);
    expect(descriptions[3]).toHaveTextContent(/Jul 1, 2024/i);
  });

  it('renders correct link for all courses', () => {
    renderWithRouter(
      <SchoolMenu>
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={course.startDate}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const links = screen.getAllByRole('link');

    mockedCourses.forEach((course) => {
      const link = links.find((el) => {
        return el.textContent?.includes(course.title);
      });

      expect(link).toHaveAttribute('href', course.detailsUrl);
    });
  });
});
