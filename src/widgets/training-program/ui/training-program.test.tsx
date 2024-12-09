import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { Course } from '@/entities/course';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { TrainingProgram } from '@/widgets/training-program';
import { COURSE_TITLES } from 'data';

const mockedCourseAngular: Course = mockedCourses[4];
const mockedCourseAws: Course = mockedCourses[5];
const mockedParagraphsAngular = [
  'This course is designed for individuals with a solid foundation in JavaScript, TypeScript, and front-end development. Familiarity with RS School processes and RS Stage #2 certification is a plus.',
  'The course lasts 11 weeks, requiring approximately 20-40 hours of study per week.',
  'All webinars are recorded and available on our',
  '. Theoretical materials are provided as recorded lectures from previous courses.',
];
const mockedParagraphsAws = [
  'This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate',
  'Be well-prepared to pass the "AWS Certified Developer - Associate"',
  'Course highlights',
  'using AWS S3 and CloudFront',
  'Implement backend-for-frontend using API Gateway',
];

describe('TrainingProgram', () => {
  describe('with "angular" props', () => {
    beforeEach(() => {
      renderWithRouter(<TrainingProgram course={mockedCourseAngular} courseName="Angular" />);
    });

    it(`renders correct title "Training Program"`, () => {
      const title = screen.getByText(/Training program/i);

      expect(title).toBeVisible();
    });

    it('renders correct paragraphs', () => {
      mockedParagraphsAngular.forEach((p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      });
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });

      expect(button).toHaveAttribute('href', '/enroll');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: COURSE_TITLES.ANGULAR });

      expect(image).toHaveAttribute('alt', expect.stringContaining('Angular'));
    });
  });

  describe('with "awsDev" props', () => {
    beforeEach(() => {
      renderWithRouter(
        <TrainingProgram course={mockedCourseAws} courseName="AWS Cloud Developer" />,
      );
    });

    it('renders correct title', () => {
      const title = screen.getByText(/Training program/i);

      expect(title).toBeInTheDocument();
    });

    it('renders correct paragraphs', () => {
      mockedParagraphsAws.forEach((p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      });
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });

      expect(button).toHaveAttribute('href', '/enroll');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: 'AWS Fundamentals' });

      expect(image).toHaveAttribute('alt', expect.stringContaining('AWS Fundamentals'));
    });
  });
});
