import { cleanup, screen } from '@testing-library/react';
import { TrainingProgram } from './training-program';
import { renderWithRouter } from '@/__tests__/utils';
import { useCourseByTitle } from '@/app/hooks';
import { type Mock, afterEach } from 'vitest';

vi.mock('@/app/hooks');

describe('TrainingProgram Component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockCourses = [
    {
      id: '3',
      title: 'Angular course',
      startDate: '16 Oct, 2023',
      language: ['en'],
      mode: 'online',
      detailsUrl: 'https://rs.school/angular/',
      backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
    },
    {
      title: 'javascript',
      detailsUrl: 'test-detailsUrl-javascript'
    }
  ];
  mockCourses.forEach((course) => {
    it(`renders correct image for ${course.title} course`, () => {
      (useCourseByTitle as Mock).mockReturnValue({
        course
      });
      renderWithRouter(<TrainingProgram courseName={course.title} />);

      const image = screen.getByRole('img', { name: course.title });
      expect(image).toHaveAttribute('alt', expect.stringContaining(course.title));
    });
  });

  it('renders correct title', () => {
    renderWithRouter(<TrainingProgram courseName="angular" />);
    const title = screen.getByText(/Training program/i);
    expect(title).toBeVisible();
  });

  it('renders Button with correct url', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: mockCourses[0] });
    renderWithRouter(<TrainingProgram courseName={mockCourses[0].title} />);
    const button = screen.getByRole('link', { name: /register/i });
    expect(button).toHaveAttribute('href', mockCourses[0].detailsUrl);
  });
});
