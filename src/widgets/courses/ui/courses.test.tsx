import { screen } from '@testing-library/react';
import { Mock, describe, expect, it, vi } from 'vitest';

import { Courses } from './courses';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { useDataByName } from '@/shared/hooks/use-data-by-name';

const widgetTitle = 'All courses';
const mockCourses = [
  {
    id: '1',
    title: 'React course',
    iconSrc: MOCKED_IMAGE_PATH,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: {
      backgroundColor: '#EEF3FE',
      accentColor: '#7356BF',
    },
  },
];

vi.mock('@/shared/hooks/use-data-by-name', () => {
  return {
    useDataByName: vi.fn(() => ({
      data: mockCourses,
      loading: false,
      error: undefined,
    })),
  };
});

describe('Courses (other courses) component', () => {
  it('renders widget without crashing and display correct content', () => {
    renderWithRouter(<Courses />);
    const widget = screen.getByTestId('all-courses');
    const title = screen.getByTestId('widget-title');
    const courseCard = screen.getByTestId('course-card');

    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(widgetTitle);
    expect(courseCard).toBeVisible();
    expect(courseCard).toHaveTextContent(mockCourses[0].title);
  });

  it('displays a loading state for other courses', () => {
    (useDataByName as Mock).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state for other courses', () => {
    const errorMessage = 'Something went wrong';

    (useDataByName as Mock).mockImplementation(() => ({ error: new Error(errorMessage) }));
    renderWithRouter(<Courses />);

    expect(screen.getByText(errorMessage)).toBeVisible();
  });
});
