import { screen } from '@testing-library/react';
import { it, vi, expect, describe, Mock } from 'vitest';
import { useDataByName } from '@/app/hooks';
import { renderWithRouter } from '@/__tests__/utils';
import { Courses } from './courses';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

vi.mock('@/app/hooks', () => {
  return {
    useDataByName: vi.fn()
  };
});

describe('Courses', () => {
  it('displays a loading state', () => {
    (useDataByName as Mock).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state', () => {
    const errorMessage = 'Something went wrong';
    (useDataByName as Mock).mockImplementation(() => ({ error: new Error(errorMessage) }));
    renderWithRouter(<Courses />);

    expect(screen.getByText(errorMessage)).toBeVisible();
  });

  it('displays the courses when data is available', () => {
    const courses = [
      {
        id: '1',
        title: 'React course',
        iconSrc: MOCKED_IMAGE_PATH,
        startDate: '23 Oct, 2023',
        language: ['ru', 'en'],
        mode: 'online',
        detailsUrl: 'https://rs.school/react/',
        backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
      }
    ];

    (useDataByName as Mock).mockImplementation(() => ({ data: courses }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('React course')).toBeInTheDocument();
  });
});
