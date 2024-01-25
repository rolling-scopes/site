import { screen } from '@testing-library/react';
import { it, vi, expect, describe } from 'vitest';
import { useDataByName } from '@/shared/hooks';
import { renderWithRouter } from '@/shared/utils';
import { Courses } from './Courses';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

vi.mock('@/shared/hooks', () => {
  return {
    useDataByName: vi.fn()
  };
});

describe('Courses', () => {
  it('displays a loading state', () => {
    (useDataByName as any).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state', () => {
    const errorMessage = 'Something went wrong';
    (useDataByName as any).mockImplementation(() => ({ error: errorMessage }));
    renderWithRouter(<Courses />);

    expect(screen.getByText(errorMessage)).toBeVisible();
    expect(screen.getByText(errorMessage)).toHaveStyle({ color: 'rgb(255, 0, 0)' });
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

    (useDataByName as any).mockImplementation(() => ({ data: courses }));
    renderWithRouter(<Courses />);

    expect(screen.getByText('React course')).toBeInTheDocument();
  });
});
