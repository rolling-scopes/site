import { screen } from '@testing-library/react';
import { beforeEach } from 'vitest';
import { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import giftIcon from '@/shared/assets/icons/gift.webp';
import noteIcon from '@/shared/assets/icons/note-icon.webp';
import { dayJS } from '@/shared/helpers/dayJS.ts';
import { About } from '@/widgets/about';

const mockedCourse: Course = {
  id: '1',
  backgroundStyle: {
    accentColor: '',
    backgroundColor: '',
  },
  detailsUrl: '',
  iconSmall: MOCKED_IMAGE_PATH,
  iconSrc: MOCKED_IMAGE_PATH,
  title: 'React.js',
  language: ['en'],
  mode: 'online',
  enroll: 'http://course-url.com',
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
};

describe('About', () => {
  describe('with "react" props', () => {
    beforeEach(() => {
      renderWithRouter(<About course={mockedCourse} courseName="React" />);
    });

    it('renders "Become a student" button with correct href when courseName is "react"', async () => {
      expect(await screen.findByRole('link', { name: /Become a student/i })).toHaveAttribute(
        'href',
        'http://course-url.com',
      );
    });

    it('renders "Free education" item and correct icon', () => {
      expect(screen.getByText('Free education')).toBeVisible();
      expect(screen.getByRole('img', { name: 'Free education' })).toHaveAttribute(
        'src',
        giftIcon.src,
      );
    });
  });

  describe('with "angular" props', () => {
    beforeEach(() => {
      renderWithRouter(<About course={mockedCourse} courseName="Angular" />);
    });

    it('renders "Become a student" button with correct href', async () => {
      expect(await screen.findByRole('link', { name: /Become a student/i })).toHaveAttribute(
        'href',
        'http://course-url.com',
      );
    });

    it('renders "Schedule" item and correct icon', () => {
      expect(screen.getByText('Schedule')).toBeVisible();
      expect(screen.getByRole('img', { name: 'Schedule' })).toHaveAttribute('src', noteIcon.src);
    });

    it('renders correct "Schedule" description', () => {
      expect(
        screen.getByText(/Twice a week in the evenings. Duration: 9 weeks./i),
      ).toBeInTheDocument();
    });
  });
});
