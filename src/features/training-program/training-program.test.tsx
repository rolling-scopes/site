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
          detailsUrl: '/courses/angular',
          enroll: 'https://wearecommunity.io/events/rs-angular-2023q4',
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
      expect(button).toHaveAttribute('href', 'https://wearecommunity.io/events/rs-angular-2023q4');
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
          id: '8',
          title: 'AWS Cloud Developer',
          detailsUrl: '/courses/aws-cloud-developer',
          enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4'
        }
      });
      renderWithRouter(<TrainingProgram courseName="aws cloud dev" />);
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
      expect(button).toHaveAttribute(
        'href',
        'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4'
      );
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: 'AWS Cloud Developer' });
      expect(image).toHaveAttribute('alt', expect.stringContaining('AWS Cloud Developer'));
    });
  });

  describe('with "react ru" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValueOnce({
        course: {
          id: '3',
          title: 'react-ru',
          detailsUrl: '/courses/react-ru',
          enroll: 'https://wearecommunity.io/events/rs-react-2023q4'
        }
      });

      renderWithRouter(<TrainingProgram courseName="react ru" />);
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

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /Записаться/i });
      expect(button).toHaveAttribute('href', 'https://wearecommunity.io/events/rs-react-2023q4');
    });
  });
});
