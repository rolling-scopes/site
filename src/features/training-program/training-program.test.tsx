import { screen } from '@testing-library/react';
import { TrainingProgram } from './training-program';
import { renderWithRouter } from '@/__tests__/utils';
import { useCourseByTitle } from '@/app/hooks';
import { type Mock, vi, beforeEach } from 'vitest';

vi.mock('@/app/hooks');

describe('TrainingProgram', () => {
  describe('with "angular" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValueOnce({
        course: {
          id: '1',
          title: 'angular',
          startDate: '16 Oct, 2023',
          language: ['en'],
          mode: 'online',
          detailsUrl: 'https://rs.school/angular/',
          backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#F4AFA7' }
        }
      });
      renderWithRouter(<TrainingProgram courseName="angular" />);
    });

    it(`renders correct title "Training Program"`, () => {
      const title = screen.getByText(/Training program/i);
      expect(title).toBeVisible();
    });

    it('renders correct paragraphs', () => {
      const paragraphs = [
        'The program consists of 3 stages. There may be requirements for advancing to each higher stage',
        'You will also have the ability to communicate with other students and help each other solve any problems you might face',
        'deadlines are not suggestions, and should be respected',
        'Attention! Mentors on this course will be first'
      ];

      paragraphs.forEach((p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      });
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });
      expect(button).toHaveAttribute('href', 'https://rs.school/angular/');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: 'angular' });
      expect(image).toHaveAttribute('alt', expect.stringContaining('angular'));
    });
  });

  describe('with "awsDev" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValueOnce({
        course: {
          id: '2',
          title: 'aws-dev',
          detailsUrl: 'https://rs.school/aws-dev'
        }
      });
      renderWithRouter(<TrainingProgram courseName="awsDev" />);
    });

    it('renders correct title', () => {
      const title = screen.getByText(/Training program/i);
      expect(title).toBeInTheDocument();
    });

    it('renders correct paragraphs', () => {
      const paragraphs = [
        'This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate',
        'Be well-prepared to pass the "AWS Certified Developer - Associate"',
        'Course highlights',
        'using AWS S3 and CloudFront',
        'Implement backend-for-frontend using API Gateway'
      ];
      paragraphs.forEach((p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      });
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });
      expect(button).toHaveAttribute('href', 'https://rs.school/aws-dev');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: 'aws-dev' });
      expect(image).toHaveAttribute('alt', expect.stringContaining('aws-dev'));
    });
  });

  describe('with "reactRu" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValueOnce({
        course: {
          id: '3',
          title: 'react-ru',
          detailsUrl: 'https://rs.school/react-ru'
        }
      });

      renderWithRouter(<TrainingProgram courseName="reactRu" />);
    });

    it('renders correct title', () => {
      const title = screen.getByText(/Для кого/i);
      expect(title).toBeInTheDocument();
    });

    it('renders correct paragraph', () => {
      const p = screen.getByText(
        /Бесплатный курс от сообщества The Rolling Scopes для тех, кто хочет получить знания и опыт/i
      );
      expect(p).toBeInTheDocument();
    });
  });
});
