import { screen } from '@testing-library/react';
import { Mock, describe, expect, it, vi } from 'vitest';
import { Courses } from './courses';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { renderWithRouter } from '@/__tests__/utils';
import { useNearestCourse } from '@/app/hooks';

vi.mock('@/app/hooks', () => {
  return {
    useDataByName: vi.fn(() => ({ data: [], loading: false, error: undefined })),
    useNearestCourse: vi.fn().mockImplementation(() => ({
      course: undefined,
      loading: false,
      error: undefined,
      hasError: false,
    })),
  };
});

describe('Courses (nearest course)', () => {
  it('displays a loading state for nearest course', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state for nearest course', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({ hasError: true }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('Error loading courses.')).toBeVisible();
  });

  it('displays the courses when data is available for nearest course', () => {
    const course = {
      id: '2',
      title: 'React JS course',
      iconSrc: MOCKED_IMAGE_PATH,
      startDate: '23 Oct, 2023',
      language: ['ru', 'en'],
      mode: 'online',
      detailsUrl: '/courses/reactjs',
      backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' },
    };

    (useNearestCourse as Mock).mockImplementation(() => ({ course }));
    renderWithRouter(<Courses />);
    expect(screen.getByText('React JS course')).toBeVisible();
  });

  it('displays no courses found when there is no course', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({}));
    renderWithRouter(<Courses />);
    expect(screen.getByText('No courses found.')).toBeInTheDocument();
  });
});
