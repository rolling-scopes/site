import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';

import { AboutCourse } from './about-course';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';
import { COURSE_TITLES } from 'data';

const mockReactCourse = mockedCourses.find((course) => course.title === COURSE_TITLES.REACT);
const mockCourseWithoutLink = mockedCourses.find(
  (course) => course.title === COURSE_TITLES.AWS_DEVOPS,
)!;

describe('AboutCourse component', () => {
  describe('render with "react" props', () => {
    beforeEach(async () => {
      const widget = await AboutCourse({ courseName: COURSE_TITLES.REACT });

      renderWithRouter(widget);
    });

    it('renders correct content for component', async () => {
      const title = await screen.findByTestId('widget-title');
      const aboutCourseGrid = await screen.findByTestId('about-course-grid');

      expect(title).toBeVisible();
      expect(title.textContent).toBe('About the course');

      expect(aboutCourseGrid).toBeVisible();
      expect(aboutCourseGrid.children).toHaveLength(4);
    });

    it('renders "Become a student" button with correct href when courseName is "react"', async () => {
      const button = await screen.findByRole('link', { name: /Become a student/i });

      expect(button).toHaveAttribute('href', `/${mockReactCourse?.enroll}`);
    });
  });

  describe('render 5 grid-items with "aws-devops" props', () => {
    it('render 5 grid-items with "aws-devops" props', async () => {
      const widget = await AboutCourse({ courseName: COURSE_TITLES.AWS_DEVOPS });

      renderWithRouter(widget);
      const aboutCourseGrid = await screen.findByTestId('about-course-grid');

      expect(aboutCourseGrid).toBeVisible();
      expect(aboutCourseGrid.children).toHaveLength(5);
    });
  });

  describe('render "Paragraph" with "js / front-end pre-school ru" props', () => {
    it("renders 'Paragraph' and its' content", async () => {
      const widget = await AboutCourse({ courseName: COURSE_TITLES.JS_PRESCHOOL_RU });

      renderWithRouter(widget);

      const paragraph = await screen.findByText(/Подготовительный этап поможет тем/i);

      expect(paragraph).toBeVisible();
    });
  });

  describe('Render widget with empty link', () => {
    it('renders registration will open soon with correct label and href', async () => {
      const widget = await AboutCourse({ courseName: mockCourseWithoutLink.title });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON);
    });

    it('renders registration will open soon in russian with correct label and href', async () => {
      const widget = await AboutCourse({ courseName: COURSE_TITLES.JS_RU });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON_RU);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON_RU);
    });
  });
});
