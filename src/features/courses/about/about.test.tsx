import { About } from './about';
import { screen } from '@testing-library/react';
import { it, vi, expect, describe, Mock } from 'vitest';
import { useNearestCourse } from '@/app/hooks';
import { renderWithRouter } from '@/__tests__/utils';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

vi.mock('@/app/hooks', () => {
  return {
    useNearestCourse: vi.fn()
  };
});

describe('About', () => {
  it('displays a loading state', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<About />);
    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({ hasError: true }));
    renderWithRouter(<About />);
    expect(
      screen.getByText('Error loading courses. Try again with different course title.')
    ).toBeVisible();
  });

  it('displays the course when data is available', () => {
    const course = {
      id: '2',
      title: 'React JS course',
      iconSrc: MOCKED_IMAGE_PATH,
      startDate: '23 Oct, 2023',
      language: ['ru', 'en'],
      mode: 'online',
      detailsUrl: '/courses/reactjs',
      backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
    };

    (useNearestCourse as Mock).mockImplementation(() => ({ course }));
    renderWithRouter(<About />);
    expect(screen.getByText('React JS course')).toBeVisible();
  });

  it('displays no courses found when there is no course', () => {
    (useNearestCourse as Mock).mockImplementation(() => ({}));
    renderWithRouter(<About />);
    expect(screen.getByText('No React courses found.')).toBeInTheDocument();
  });
});
