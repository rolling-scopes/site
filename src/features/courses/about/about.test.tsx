import { About } from './about';
import { screen } from '@testing-library/react';
import { it, vi, expect, describe, Mock } from 'vitest';
import { useCourseByTitle } from '@/app/hooks';
import { renderWithRouter } from '@/__tests__/utils';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

vi.mock('@/app/hooks', () => {
  return {
    useCourseByTitle: vi.fn()
  };
});

describe('About', () => {
  it('displays a loading state', () => {
    (useCourseByTitle as Mock).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<About />);
    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state', () => {
    const errorMessage = 'Something went wrong';
    (useCourseByTitle as Mock).mockImplementation(() => ({ error: errorMessage }));
    renderWithRouter(<About />);
    expect(screen.getByText(`Error loading courses: ${errorMessage}`)).toBeVisible();
  });

  it('displays the course when data is available', () => {
    const course = {
      id: '2',
      title: 'React JS course',
      iconSrc: MOCKED_IMAGE_PATH,
      startDate: '23 Oct, 2023',
      language: ['ru', 'en'],
      mode: 'online',
      detailsUrl: 'https://rs.school/react/',
      backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
    };

    (useCourseByTitle as Mock).mockImplementation(() => ({ course }));
    renderWithRouter(<About />);
    expect(screen.getByText('React JS course')).toBeVisible();
  });

  it('displays no courses found when there is no course', () => {
    (useCourseByTitle as Mock).mockImplementation(() => ({}));
    renderWithRouter(<About />);
    expect(screen.getByText('No React courses found.')).toBeInTheDocument();
  });
});
