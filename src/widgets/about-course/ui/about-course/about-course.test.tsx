import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { AboutCourse } from './about-course';
import { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_ALIASES, TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';
import { COURSE_TITLES } from 'data';

const mockedReactCourse: Course = {
  id: '1',
  backgroundStyle: {
    accentColor: '',
    backgroundColor: '',
  },
  detailsUrl: '',
  iconSmall: MOCKED_IMAGE_PATH,
  iconSrc: MOCKED_IMAGE_PATH,
  title: COURSE_TITLES.REACT,
  subTitle: null,
  alias: COURSE_ALIASES.REACT,
  language: ['en'],
  mode: 'online',
  enroll: 'http://course-url.com',
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
  registrationEndDate: TO_BE_DETERMINED,
};

const mockedAwsDevopsCourse = {
  ...mockedReactCourse,
  title: COURSE_TITLES.AWS_DEVOPS,
};

const mockedPreSchoolCourse = {
  ...mockedReactCourse,
  title: COURSE_TITLES.JS_PRESCHOOL_RU,
};

describe('AboutCourse component', () => {
  describe('render with "react" props', () => {
    beforeEach(() => {
      renderWithRouter(<AboutCourse course={mockedReactCourse} courseName="React" />);
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
      renderWithRouter(<AboutCourse course={mockedAwsDevopsCourse} courseName="AWS DevOps" />);

      const aboutCourseGrid = await screen.findByTestId('about-course-grid');

      expect(aboutCourseGrid).toBeVisible();
      expect(aboutCourseGrid.children).toHaveLength(5);
    });
  });

  describe('render "Paragraph" with "js / front-end pre-school ru" props', () => {
    it("renders 'Paragraph' and its' content", async () => {
      renderWithRouter(
        <AboutCourse course={mockedPreSchoolCourse} courseName="JS / Front-end Pre-school RU" />,
      );

      const paragraph = await screen.findByText(/Подготовительный этап поможет тем/i);

      expect(paragraph).toBeVisible();
    });
  });
});
