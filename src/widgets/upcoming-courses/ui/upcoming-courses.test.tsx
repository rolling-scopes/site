import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mockedCourses } from '@/shared/__tests__/constants.ts';
import { UpcomingCourses } from '@/widgets/upcoming-courses';

vi.mock('@/shared/helpers/getActualData', () => ({ getActualData: vi.fn().mockImplementation(() => mockedCourses) }));

describe('Courses', () => {
  beforeEach(async () => {
    const upcomingCourses = await UpcomingCourses();

    render(upcomingCourses);
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
