import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { SchoolMenu } from '../school-menu/school-menu';
import { COURSE_STALE_AFTER_DAYS } from '@/core/const';
import { Course } from '@/entities/course';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { getCourseDate } from '@/shared/helpers/getCourseDate.ts';
import { schoolMenuStaticLinks } from 'data';

const { mockedCourse } = await vi.hoisted(async () => {
  const { MOCKED_IMAGE_PATH } = await import('@/shared/__tests__/constants');

  const mockedCourse: Course[] = [
    {
      id: '1',
      title: 'AWS Fundamentals',
      iconSrc: MOCKED_IMAGE_PATH,
      iconSmall: MOCKED_IMAGE_PATH,
      secondaryIcon: MOCKED_IMAGE_PATH,
      startDate: 'Sept 18, 2023',
      language: ['ru'],
      mode: 'online',
      detailsUrl: 'https://rs.school/aws-fundamentals/',
      backgroundStyle: {
        backgroundColor: '#F4F1FA',
        accentColor: '#7356BF',
      },
      enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    },
    {
      id: '2',
      title: 'React JS [mentorshipId]',
      iconSrc: MOCKED_IMAGE_PATH,
      iconSmall: MOCKED_IMAGE_PATH,
      secondaryIcon: MOCKED_IMAGE_PATH,
      startDate: 'Sept 18, 2060',
      language: ['ru'],
      mode: 'online',
      detailsUrl: 'https://rs.school/react/',
      backgroundStyle: {
        backgroundColor: '#EEF3FE',
        accentColor: '#7356BF',
      },
      enroll: 'https://wearecommunity.io/events/js-stage0-rs-2024q2',
    },
  ];

  return { mockedCourse };
});

describe('SchoolMenu', () => {
  const [aws, react] = mockedCourse;

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
        {mockedCourse.map((course) => (
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
        {mockedCourse.map((course) => (
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

    expect(images).toHaveLength(2);
  });

  it('renders correct link description when date is passed', () => {
    const { container } = renderWithRouter(
      <SchoolMenu>
        {mockedCourse.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const descriptions = container.getElementsByTagName('small');

    expect(descriptions).toHaveLength(2);
    expect(descriptions[0]).toHaveTextContent(/tbd/i);
    expect(descriptions[1]).toHaveTextContent(`${react.startDate}`);
  });

  it('renders correct link for "AWS Fundamentals" and "React JS [mentorshipId]"', () => {
    renderWithRouter(
      <SchoolMenu>
        {mockedCourse.map((course) => (
          <SchoolMenu.Item
            key={course.id}
            title={course.title}
            description={getCourseDate(course.startDate, COURSE_STALE_AFTER_DAYS)}
            url={course.detailsUrl}
          />
        ))}
      </SchoolMenu>,
    );

    const [linkAWS, linkReact] = screen.getAllByRole('link');

    expect(linkAWS).toHaveAttribute('href', aws.detailsUrl);
    expect(linkReact).toHaveAttribute('href', react.detailsUrl);
  });
});
