import { screen } from '@testing-library/react';
import { Mock, describe, expect, it, vi } from 'vitest';
import { Courses } from './courses';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { renderWithRouter } from '@/__tests__/utils';
import { useDataByName } from '@/app/hooks';

vi.mock('@/app/hooks', () => {
  return {
    useDataByName: vi.fn(() => ({
      data: undefined,
      loading: false,
      error: undefined,
    })),
    useNearestCourse: vi.fn().mockImplementation(() => ({
      course: undefined,
      loading: false,
      error: undefined,
      hasError: false,
    })),
  };
});

describe('Courses (other courses)', () => {
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

  it('displays the courses when data is available for other courses', () => {
    const courses = [
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

    (useDataByName as Mock).mockImplementation(() => ({ data: courses }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('React course')).toBeInTheDocument();
  });
});
