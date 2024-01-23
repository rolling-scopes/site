import { About } from './About';
import { screen } from '@testing-library/react';
import { it, vi, expect, describe } from 'vitest';
import { useCourseByTitle } from '@/shared/hooks';
import { renderWithRouter } from '@/shared/utils';

vi.mock('@/shared/hooks', () => {
  return {
    useCourseByTitle: vi.fn()
  };
});

describe('About', () => {
  it('displays a loading state', () => {
    (useCourseByTitle as any).mockImplementation(() => ({ loading: true }));
    renderWithRouter(<About />);
    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('displays a error state', () => {
    const errorMessage = 'Something went wrong';
    (useCourseByTitle as any).mockImplementation(() => ({ error: errorMessage }));
    renderWithRouter(<About />);
    expect(screen.getByText(`Error loading courses: ${errorMessage}`)).toBeVisible();
  });

  it('displays the course when data is available', () => {
    const course = {
      id: '2',
      title: 'React JS course',
      iconSrc: 'mocked-image-path',
      startDate: '23 Oct, 2023',
      language: ['ru', 'en'],
      mode: 'online',
      detailsUrl: 'https://rs.school/react/',
      backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
    };

    (useCourseByTitle as any).mockImplementation(() => ({ course }));
    renderWithRouter(<About />);
    expect(screen.getByText('React JS course')).toBeVisible();
  });

  it('displays no courses found when there is no course', () => {
    (useCourseByTitle as any).mockImplementation(() => ({}));
    renderWithRouter(<About />);
    expect(screen.getByText('No React courses found.')).toBeVisible();
  });
});
