import { cleanup, screen } from '@testing-library/react';
import { Communication } from './communication';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES, DISCORD_LINKS, communicationText } from 'data';

const mockLangVariants = [
  {
    course: mockedCourses.find((course) => course.title === COURSE_TITLES.ANGULAR)!,
    texts: communicationText.en,
  },
  {
    course: mockedCourses.find((course) => course.title === COURSE_TITLES.JS_PRESCHOOL_RU)!,
    texts: communicationText.ru,
  },
];

const mockCourseVariants = mockedCourses.map((course) => {
  return {
    course,
    link: DISCORD_LINKS[course.title],
  };
});

describe('Communication section', () => {
  it.each(mockLangVariants)(
    'should render component correctly with $course.title language prop',
    ({ course, texts }) => {
      const { title, subTitle, firstParagraphFirstHalf, discordLink } = texts;

      renderWithRouter(<Communication course={course} />);
      const titleElement = screen.getByText(title);
      const subtitleElement = screen.getByText(subTitle);
      const firstParagraphElement = screen.getByText(`${firstParagraphFirstHalf}`, { exact: false });
      const linkElement = screen.getByText(discordLink);

      expect(titleElement).toBeVisible();
      expect(subtitleElement).toBeVisible();
      expect(firstParagraphElement).toBeVisible();
      expect(linkElement).toBeVisible();
      expect(linkElement.getAttribute('href')).toMatch(DISCORD_LINKS[course.title]);
      cleanup();
    },
  );

  it.each(mockCourseVariants)('should render correct link of $course.title', (variant) => {
    renderWithRouter(<Communication course={variant.course} />);
    const linkElement = screen.getByTestId('discord-link');

    expect(linkElement).toBeVisible();
    expect(linkElement.getAttribute('href')).toBe(variant.link);
    cleanup();
  });
});
