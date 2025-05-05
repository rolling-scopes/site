import { cleanup, screen } from '@testing-library/react';

import { Communication } from './communication';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES, CourseNamesKeys, DISCORD_LINKS, communicationText } from 'data';

const mockLangVariants = [
  {
    course: COURSE_TITLES.ANGULAR,
    texts: communicationText.en,
  },
  {
    course: COURSE_TITLES.JS_PRESCHOOL_RU,
    texts: communicationText.ru,
  },
];

const mockCourseVariants = mockedCourses.map((course) => {
  return {
    course,
    link: DISCORD_LINKS[course.title as CourseNamesKeys],
  };
});

describe('Communication section', () => {
  it.each(mockLangVariants)(
    'should render component correctly with $course.title language prop',
    async ({ course, texts }) => {
      const { title, subTitle, firstParagraphFirstHalf, discordLink } = texts;
      const widget = await Communication({ courseName: course });

      renderWithRouter(widget);
      const titleElement = screen.getByText(title);
      const subtitleElement = screen.getByText(subTitle);
      const firstParagraphElement = screen.getByText(`${firstParagraphFirstHalf}`, { exact: false });
      const linkElement = screen.getByText(discordLink);

      expect(titleElement).toBeVisible();
      expect(subtitleElement).toBeVisible();
      expect(firstParagraphElement).toBeVisible();
      expect(linkElement).toBeVisible();
      expect(linkElement.getAttribute('href')).toMatch(DISCORD_LINKS[course]);
      cleanup();
    },
  );

  it.each(mockCourseVariants)('should render correct link of $course.title', async (variant) => {
    const widget = await Communication({ courseName: variant.course.title });

    renderWithRouter(widget);
    const linkElement = screen.getByTestId('discord-link');

    expect(linkElement).toBeVisible();
    expect(linkElement.getAttribute('href')).toBe(variant.link);
    cleanup();
  });
});
