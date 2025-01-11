import { screen } from '@testing-library/react';
import { HeroCourse } from './hero-course';
import { MOCKED_IMAGE_PATH, mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';
import { COURSE_TITLES } from 'data';

const mockedCourseWithSubtitle = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.JS_PRESCHOOL_RU,
)!;
const mockedCourseNoSubtitle = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.JS_EN,
)!;

describe('HeroCourse component', () => {
  describe('Render general content', () => {
    beforeEach(async () => {
      const widget = await HeroCourse({ courseName: mockedCourseWithSubtitle.title });

      renderWithRouter(widget);
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

    it('renders enroll button with correct label and href', () => {
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
      const widget = await HeroCourse({ courseName: mockedCourseNoSubtitle.title });

      renderWithRouter(widget);
      const subtitleElement = await screen.queryByTestId('course-subtitle');

      expect(subtitleElement).toBeNull();
    });
  });

  describe('Render widget with empty link', () => {
    it('renders registration will open soon with correct label and href', async () => {
      const widget = await HeroCourse({ courseName: COURSE_TITLES.AWS_DEVOPS });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON);
    });

    it('renders registration will open soon in russian with correct label and href', async () => {
      const widget = await HeroCourse({ courseName: COURSE_TITLES.JS_RU });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON_RU);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON_RU);
    });
  });
});
