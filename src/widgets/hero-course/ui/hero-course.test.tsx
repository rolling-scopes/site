import { screen } from '@testing-library/react';
import { HeroCourse } from './hero-course';
import { ROUTES } from '@/core/const';
import type { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_ALIASES, TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';
import { COURSE_TITLES } from 'data';

const mockedCourse: Course = {
  id: '6',
  title: COURSE_TITLES.NODE,
  subTitle: 'Test Subtitle',
  alias: COURSE_ALIASES.NODE,
  iconSrc: MOCKED_IMAGE_PATH,
  iconSmall: MOCKED_IMAGE_PATH,
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
  registrationEndDate: TO_BE_DETERMINED,
  language: ['en'],
  mode: 'online',
  detailsUrl: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
  enroll: 'https://test.com',
  backgroundStyle: {
    backgroundColor: '#F0F9F4',
    accentColor: '#AEDF36',
  },
};
const mockedCourseNoSubtitle: Course = {
  id: '6',
  title: COURSE_TITLES.NODE,
  subTitle: null,
  alias: COURSE_ALIASES.NODE,
  iconSrc: MOCKED_IMAGE_PATH,
  iconSmall: MOCKED_IMAGE_PATH,
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
  registrationEndDate: TO_BE_DETERMINED,
  language: ['en'],
  mode: 'online',
  detailsUrl: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
  enroll: 'https://test.com',
  backgroundStyle: {
    backgroundColor: '#F0F9F4',
    accentColor: '#AEDF36',
  },
};

describe('HeroCourse component', () => {
  describe('Render general content', () => {
    beforeEach(() => {
      renderWithRouter(<HeroCourse course={mockedCourse} />);
    });

    it('renders the title, label and subtitle correctly', async () => {
      const titleElement = await screen.findByText('Node.js Course');
      const labelElement = screen.getByText('planned');
      const subtitleElement = await screen.findByText('Test Subtitle');

      expect(titleElement).toBeVisible();
      expect(labelElement).toBeVisible();
      expect(subtitleElement).toBeVisible();
    });

    it('renders enroll button with correct label and href', () => {
      const buttonElement = screen.getByRole('link', { name: /enroll/i });

      expect(buttonElement).toBeVisible();
      expect(buttonElement).toHaveAttribute('href', 'https://test.com');
    });

    it('renders the image with correct source', () => {
      const imageElement = screen.getByRole('img', { name: /Node.js/i });

      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
    });
  });

  describe('Render widget with empty subtitle', () => {
    it('does not display subtitles if they are not provided', () => {
      renderWithRouter(<HeroCourse course={mockedCourseNoSubtitle} />);
      const subtitleElement = screen.queryByText('Test Subtitle');

      expect(subtitleElement).toBeNull();
    });
  });
});
