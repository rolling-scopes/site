import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_ALIASES } from '@/shared/constants';
import { TrainingProgram } from '@/widgets/training-program';
import { COURSE_TITLES } from 'data';

const mockedCourseAngular: Course = {
  id: '1',
  title: COURSE_TITLES.ANGULAR,
  alias: COURSE_ALIASES.ANGULAR,
  startDate: '16 Oct, 2023',
  iconSmall: MOCKED_IMAGE_PATH,
  iconSrc: MOCKED_IMAGE_PATH,
  secondaryIcon: MOCKED_IMAGE_PATH,
  language: ['en'],
  mode: 'online',
  detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
  enroll: 'https://wearecommunity.io/events/rs-angular-2023q4',
  backgroundStyle: {
    backgroundColor: '#F4F1FA',
    accentColor: '#F4AFA7',
  },
};

const mockedCourseAws: Course = {
  id: '8',
  language: ['en'],
  iconSmall: MOCKED_IMAGE_PATH,
  iconSrc: MOCKED_IMAGE_PATH,
  secondaryIcon: MOCKED_IMAGE_PATH,
  mode: 'online',
  startDate: '',
  title: COURSE_TITLES.AWS_CLOUD_DEVELOPER,
  alias: COURSE_ALIASES.AWS_CLOUD_DEVELOPER,
  detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_DEVELOPER}`,
  enroll: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4',
  backgroundStyle: {
    backgroundColor: '#F4F1FA',
    accentColor: '#F4AFA7',
  },
};

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
      const paragraphs = [
        'This course is designed for individuals with a solid foundation in JavaScript, TypeScript, and front-end development. Familiarity with RS School processes and RS Stage #2 certification is a plus.',
        'The course lasts 11 weeks, requiring approximately 20-40 hours of study per week.',
        'All webinars are recorded and available on our',
        '. Theoretical materials are provided as recorded lectures from previous courses.',
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
      const image = screen.getByRole('img', { name: COURSE_TITLES.ANGULAR });

      expect(image).toHaveAttribute('alt', expect.stringContaining(COURSE_TITLES.ANGULAR));
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
      const paragraphs = [
        'This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate',
        'Be well-prepared to pass the "AWS Certified Developer - Associate"',
        'Course highlights',
        'using AWS S3 and CloudFront',
        'Implement backend-for-frontend using API Gateway',
      ];

      paragraphs.forEach((p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      });
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });

      expect(button).toHaveAttribute(
        'href',
        'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4',
      );
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByRole('img', { name: 'AWS Cloud Developer' });

      expect(image).toHaveAttribute('alt', expect.stringContaining('AWS Cloud Developer'));
    });
  });
});
