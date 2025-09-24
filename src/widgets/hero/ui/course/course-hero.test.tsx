/* eslint-disable import/no-namespace */

import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { CourseHero } from './course-hero';
import { MOCKED_IMAGE_PATH, mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import {
  COURSE_TITLES,
  REGISTRATION_WILL_OPEN_SOON,
  REGISTRATION_WILL_OPEN_SOON_RU,
  TO_BE_DETERMINED,
} from '@/shared/constants';
import * as getCourseDate from '@/shared/helpers/get-course-date';

const mockedCourseWithSubtitle = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.JS_PRESCHOOL_RU,
)!;
const mockedCourseAws = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.AWS_DEVOPS,
)!;
const mockedCourseNoSubtitle = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.JS_EN,
)!;
const mockedCourseRu = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.JS_RU,
)!;
const mockedCalculateFreshDate = vi.spyOn(getCourseDate, 'calculateFreshDate');

describe('HeroCourse component', () => {
  describe('Render general content', () => {
    beforeEach(async () => {
      renderWithRouter(<CourseHero course={mockedCourseWithSubtitle} locale="ru" />);
    });

    it('renders the title, label and subtitle correctly', async () => {
      const titleElement = await screen.findByTestId('main-title');
      const labelElement = await screen.findByTestId('course-label');
      const subtitleElement = await screen.findByTestId('course-subtitle');

      expect(titleElement).toBeVisible();
      expect(titleElement.textContent).toBe('JavaScript / Front-end Course');
      expect(labelElement).toBeVisible();
      expect(subtitleElement).toBeVisible();
      expect(subtitleElement.textContent).toBe('Pre-school RU');
    });

    it('renders enroll button with correct label and href', async () => {
      mockedCalculateFreshDate.mockReturnValue(mockedCourseWithSubtitle.startDate);

      renderWithRouter(<CourseHero course={mockedCourseWithSubtitle} locale="ru" />);

      const buttonElement = screen.getByRole('link', { name: /присоединиться/i });

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', `/${mockedCourseWithSubtitle.enroll}`);
    });

    it('renders the image with correct source', () => {
      const imageElement = screen.getByTestId('hero-image');

      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
      expect(imageElement).toHaveAttribute('alt', 'JS / Front-end Pre-school RU-logo');
    });
  });

  describe('Render widget with empty subtitle', () => {
    it('does not display subtitles if they are not provided', async () => {
      renderWithRouter(<CourseHero course={mockedCourseNoSubtitle} locale="en-US" />);
      const subtitleElement = await screen.queryByTestId('course-subtitle');

      expect(subtitleElement).toBeNull();
    });
  });

  describe('Render widget with empty link', () => {
    it('renders registration will open soon with correct label and href', async () => {
      mockedCalculateFreshDate.mockReturnValue(TO_BE_DETERMINED);

      renderWithRouter(<CourseHero course={mockedCourseAws} locale="en-US" />);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON);
    });

    it('renders registration will open soon in russian with correct label and href', async () => {
      mockedCalculateFreshDate.mockReturnValue(TO_BE_DETERMINED);

      renderWithRouter(<CourseHero course={mockedCourseRu} locale="ru" />);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON_RU);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON_RU);
    });
  });
});
