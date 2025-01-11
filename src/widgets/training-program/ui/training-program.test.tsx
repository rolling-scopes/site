import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { renderWithRouter } from '@/shared/__tests__/utils';
import angularImg from '@/shared/assets/rs-slope-angular.webp';
import awsDevImg from '@/shared/assets/rs-slope-aws-dev.webp';
import { REGISTRATION_WILL_OPEN_SOON, REGISTRATION_WILL_OPEN_SOON_RU } from '@/shared/constants';
import { TrainingProgram } from '@/widgets/training-program';
import { COURSE_TITLES } from 'data';

const mockedParagraphsAngular = [
  'This course is designed for individuals with a solid foundation in JavaScript, TypeScript, and front-end development. Familiarity with RS School processes and RS Stage #2 certification is a plus.',
  'The course lasts 11 weeks, requiring approximately 20-40 hours of study per week.',
  'All webinars are recorded and available on our',
  '. Theoretical materials are provided as recorded lectures from previous courses.',
] as const;
const mockedParagraphsAws = [
  'This course is a step-by-step journey to become an AWS Certified Developer ‒ Associate',
  'Be well-prepared to pass the "AWS Certified Developer - Associate"',
  'Course highlights',
  'using AWS S3 and CloudFront',
  'Implement backend-for-frontend using API Gateway',
] as const;

describe('TrainingProgram', () => {
  describe('with "angular" props', () => {
    beforeEach(async () => {
      const widget = await TrainingProgram({ courseName: COURSE_TITLES.ANGULAR });

      renderWithRouter(widget);
    });

    it(`renders correct title "Training Program"`, () => {
      const title = screen.getByTestId('widget-title');

      expect(title).toBeVisible();
    });

    it.each(mockedParagraphsAngular)(
      'should render Angular course "%s" paragraph correctly',
      (p) => {
        expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
      },
    );

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });

      expect(button).toHaveAttribute('href', '/enroll');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByTestId('image');

      expect(image).toHaveAttribute('alt', expect.stringContaining('Angular'));
      expect(image).toHaveAttribute('src', angularImg.src);
    });
  });

  describe('with "awsDev" props', () => {
    beforeEach(async () => {
      const widget = await TrainingProgram({ courseName: COURSE_TITLES.AWS_CLOUD_DEVELOPER });

      renderWithRouter(widget);
    });

    it('renders correct title', () => {
      const title = screen.getByTestId('widget-title');

      expect(title).toBeInTheDocument();
    });

    it.each(mockedParagraphsAws)('should render AWS course "%s" paragraph correctly', (p) => {
      expect(screen.getByText(new RegExp(p, 'i'))).toBeInTheDocument();
    });

    it('renders Button with correct url', () => {
      const button = screen.getByRole('link', { name: /register/i });

      expect(button).toHaveAttribute('href', '/enroll');
    });

    it('renders correct image with alt text', () => {
      const image = screen.getByTestId('image');

      expect(image).toHaveAttribute('alt', expect.stringContaining('AWS Cloud Developer'));
      expect(image).toHaveAttribute('src', awsDevImg.src);
    });
  });

  describe('Render widget with empty link', () => {
    it('renders registration will open soon with correct label and href', async () => {
      const widget = await TrainingProgram({ courseName: COURSE_TITLES.AWS_DEVOPS });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON);
    });

    it('renders registration will open soon in russian with correct label and href', async () => {
      const widget = await TrainingProgram({ courseName: COURSE_TITLES.JS_RU });

      renderWithRouter(widget);

      const buttonElement = screen.getByText(REGISTRATION_WILL_OPEN_SOON_RU);

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', '/');
      expect(buttonElement).toHaveTextContent(REGISTRATION_WILL_OPEN_SOON_RU);
    });
  });
});
