import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { AboutCourse } from './about-course';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES } from 'data';

const mockReactCourse = mockedCourses.find((course) => course.title === COURSE_TITLES.REACT);

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
});
