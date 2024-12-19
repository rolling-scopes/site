import { screen } from '@testing-library/react';
import { SchoolMenu } from './ui/school-menu';
import { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH, mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES } from 'data';

describe('SchoolMenu', () => {
  const aws = mockedCourses.find(
    (course) => course.title === COURSE_TITLES.AWS_FUNDAMENTALS,
  ) as Course;
  const react = mockedCourses.find((course) => course.title === COURSE_TITLES.REACT) as Course;

  it('renders without crashing and displays "rs school" heading', () => {
    renderWithRouter(<SchoolMenu courses={mockedCourses} heading="rs school" />);

    const headingElement = screen.getByRole('heading', { name: /rs school/i });

    expect(headingElement).toBeInTheDocument();
  });

  it('displays correct links and descriptions with "rs school" props', () => {
    const { container } = renderWithRouter(
      <SchoolMenu courses={mockedCourses} heading="rs school" />,
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
    renderWithRouter(<SchoolMenu courses={mockedCourses} heading="all courses" />);

    const headingElement = screen.getByRole('heading', { name: /all courses/i });

    expect(headingElement).toBeInTheDocument();
  });

  it('renders [mentorshipId] correct when "all courses" heading is passed', () => {
    renderWithRouter(<SchoolMenu courses={mockedCourses} heading="all courses" />);

    const imageAWS = screen.getByRole('img', { name: aws.title });

    expect(imageAWS).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
    const imageReact = screen.getByRole('img', { name: react.title });

    expect(imageReact).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
  });

  it('renders correct link description when date is passed', () => {
    const { container } = renderWithRouter(
      <SchoolMenu courses={mockedCourses} heading="all courses" />,
    );

    const descriptions = container.getElementsByClassName('description');

    expect(descriptions).toHaveLength(mockedCourses.length);
    expect(descriptions[0]).toHaveTextContent(/tbd/i);
    expect(descriptions[3]).toHaveTextContent(/tbd/i);
  });

  it('renders correct link for "AWS Fundamentals" and "React JS [mentorshipId]"', () => {
    renderWithRouter(<SchoolMenu courses={mockedCourses} heading="all courses" />);

    const links = screen.getAllByRole('link');
    const linkReact = links.at(3);
    const linkAWS = links.at(-3);

    expect(linkAWS).toHaveAttribute('href', aws.detailsUrl);
    expect(linkReact).toHaveAttribute('href', react.detailsUrl);
  });
});
