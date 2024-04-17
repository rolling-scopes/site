import { render, screen } from '@testing-library/react';
import { type Mock, beforeEach } from 'vitest';
import { About } from './about';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { useCourseByTitle } from '@/app/hooks';

vi.mock('@/app/hooks');

describe('About', () => {
  describe('with "react" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValue({
        course: { enroll: 'http://course-url.com' },
      });
      render(<About courseName="react" />);
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
        MOCKED_IMAGE_PATH,
      );
    });
  });

  describe('with "angular" props', () => {
    beforeEach(() => {
      (useCourseByTitle as Mock).mockReturnValue({
        course: { enroll: 'http://course-url.com' },
      });
      render(<About courseName="angular" />);
    });

    it('renders "Become a student" button with correct href', async () => {
      expect(await screen.findByRole('link', { name: /Become a student/i })).toHaveAttribute(
        'href',
        'http://course-url.com',
      );
    });

    it('renders "Schedule" item and correct icon', () => {
      expect(screen.getByText('Schedule')).toBeVisible();
      expect(screen.getByRole('img', { name: 'Schedule' })).toHaveAttribute(
        'src',
        MOCKED_IMAGE_PATH,
      );
    });

    it('renders correct "Schedule" description', () => {
      expect(
        screen.getByText(/Twice a week in the evenings. Duration: 9 weeks./i),
      ).toBeInTheDocument();
    });
  });
});
