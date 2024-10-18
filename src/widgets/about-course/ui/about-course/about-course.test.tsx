import { screen } from '@testing-library/react';
import { type Mock, beforeEach } from 'vitest';
import { AboutCourse } from './about-course';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { useCourseByTitle } from '@/shared/hooks/use-course-by-title';

vi.mock('@/shared/hooks/use-course-by-title');

describe('AboutCourse component', () => {
  describe('render with "react" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValue({ course: { enroll: 'http://course-url.com' } });
      renderWithRouter(<AboutCourse courseName="react" />);
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
      expect(await screen.findByRole('link', { name: /Become a student/i })).toHaveAttribute(
        'href',
        'http://course-url.com',
      );
    });
  });

  describe('render 5 grid-items with "aws-devops" props', () => {
    it('render 5 grid-items with "aws-devops" props', async () => {
      (useCourseByTitle as Mock).mockReturnValue({ course: { enroll: 'http://course-url.com' } });
      renderWithRouter(<AboutCourse courseName="aws devops" />);

      const aboutCourseGrid = await screen.findByTestId('about-course-grid');

      expect(aboutCourseGrid).toBeVisible();
      expect(aboutCourseGrid.children).toHaveLength(5);
    });
  });

  describe('render "Paragraph" with "js / front-end pre-school ru" props', () => {
    it("renders 'Paragraph' and its' content", async () => {
      (useCourseByTitle as Mock).mockReturnValue({ course: { enroll: 'http://course-url.com' } });
      renderWithRouter(<AboutCourse courseName="js / front-end pre-school ru" type="pre-school-ru" />);

      const paragraph = await screen.findByText(/Подготовительный этап поможет тем/i);

      expect(paragraph).toBeVisible();
    });
  });
});
