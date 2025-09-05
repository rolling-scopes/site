import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MOCKED_IMAGE_PATH, mockedCourses } from '@/shared/__tests__/constants';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { UpcomingCourses } from '@/widgets/upcoming-courses';

vi.mock('@/shared/helpers/get-actual-data');

describe('UpcomingCourses', () => {
  describe('with courses', () => {
    beforeEach(() => {
      vi.mocked(getActualData).mockReturnValue(mockedCourses);

      render(
        <UpcomingCourses
          courses={mockedCourses}
          title="Upcoming courses"
          imageSrc={MOCKED_IMAGE_PATH}
          linkUrl="url"
          linkLabel="Go to courses"
        />,
      );
    });

    it('renders the title correctly', () => {
      const titleElement = screen.getByText('Upcoming courses');

      expect(titleElement).toBeInTheDocument();
    });

    it('renders no more than 5 course cards', () => {
      const coursesList = screen.getByTestId('courses-list');
      const courseCardsWithoutButton = coursesList.children.length - 1;

      expect(courseCardsWithoutButton).toEqual(5);
    });

    it('renders the Go to RS School button', () => {
      const goButton = screen.getByText('Go to courses');

      expect(goButton).toBeInTheDocument();
    });

    it('should render RsBanner', () => {
      const rsBanner = screen.getByTestId('rs-banner');

      expect(rsBanner).toBeInTheDocument();
    });
  });

  describe('without courses', () => {
    beforeEach(() => {
      vi.mocked(getActualData).mockReturnValue([]);

      render(
        <UpcomingCourses
          courses={mockedCourses}
          title="Upcoming courses"
          imageSrc={MOCKED_IMAGE_PATH}
          linkUrl="url"
          linkLabel="Go to courses"
        />,
      );
    });

    it('renders the title correctly', () => {
      const titleElement = screen.getByText('Upcoming courses');

      expect(titleElement).toBeInTheDocument();
    });

    it('renders the paragraph correctly', () => {
      const paragraph = screen.getByTestId('paragraph');

      expect(paragraph).toBeVisible();
    });

    it('should render RsBanner', () => {
      const rsBanner = screen.getByTestId('rs-banner');

      expect(rsBanner).toBeInTheDocument();
    });
  });
});
