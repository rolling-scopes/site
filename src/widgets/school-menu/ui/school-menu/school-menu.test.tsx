import { screen } from '@testing-library/react';
import { SchoolMenu } from '../school-menu/school-menu';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { Course } from '@/entities/course';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { getCourseDate } from '@/shared/helpers/getCourseDate';
import { COURSE_TITLES, schoolMenuStaticLinks } from 'data';

describe('SchoolMenu', () => {
  const aws = mockedCourses.find(
    (course) => course.title === COURSE_TITLES.AWS_FUNDAMENTALS,
  ) as Course;
  const react = mockedCourses.find((course) => course.title === COURSE_TITLES.REACT) as Course;

  it('renders without crashing and displays "rs school" heading', () => {
    renderWithRouter(
      <SchoolMenu heading="rs school">
        {schoolMenuStaticLinks.map((link) => (
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
        {schoolMenuStaticLinks.map((link) => (
          <SchoolMenu.Item
            key={link.title}
            title={link.title}
            description={link.description}
            url={link.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(2);

    const links = screen.getAllByRole('link');

    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });

    const descriptions = container.getElementsByTagName('small');

    for (const description of descriptions) {
      expect(description).toBeInTheDocument();
    }
  });

  it('renders without crashing and displays "all courses" heading', () => {
    renderWithRouter(
      <SchoolMenu heading="all courses">
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
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
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            icon={course.iconSmall}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const images = screen.getAllByTestId('school-item-icon');

    expect(images).toHaveLength(6);
  });

  it('renders correct link description when date is passed', () => {
    renderWithRouter(
      <SchoolMenu>
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const descriptions = screen.getAllByTestId('school-item-description');

    expect(descriptions).toHaveLength(6);
    expect(descriptions[0]).toHaveTextContent(/tbd/i);
    expect(descriptions[3]).toHaveTextContent(/tbd/i);
  });

  it('renders correct link for "AWS Fundamentals" and "React JS [mentorshipId]"', () => {
    renderWithRouter(
      <SchoolMenu>
        {mockedCourses.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const links = screen.getAllByRole('link');
    const linkReact = links.at(3);
    const linkAWS = links.at(-1);

    expect(linkAWS).toHaveAttribute('href', aws.detailsUrl);
    expect(linkReact).toHaveAttribute('href', react.detailsUrl);
  });
});
