import { render, screen } from '@testing-library/react';
import { About } from './about';
import { useCourseByTitle } from '@/app/hooks';
import { Mock } from 'vitest';

vi.mock('@/app/hooks');

describe('About', () => {
  it('renders "Become a student" button with correct href when courseName is "react"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: { detailsUrl: 'http://course-url.com' } });
    render(<About courseName="react" />);
    expect(screen.getByRole('link', { name: /Become a student/i })).toHaveAttribute(
      'href',
      'http://course-url.com'
    );
  });

  it('renders "Become a student" button with correct href when courseName is "front-end"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: { detailsUrl: 'http://course-url.com' } });
    render(<About courseName="front-end" />);
    expect(screen.getByRole('link', { name: /Become a student/i })).toHaveAttribute(
      'href',
      'http://course-url.com'
    );
  });

  it('renders "Become a student" button with fallback href when courseName is not "react" or "front-end"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="nodejs" />);
    expect(screen.getByRole('link', { name: /Become a student/i })).toHaveAttribute('href', '#');
  });

  it('renders "Free education" item when courseName is "react"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="react" />);
    expect(screen.getByText('Free education')).toBeVisible();
  });

  it('renders "Schedule" item when courseName is "react"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="nodejs" />);
    expect(screen.getByText('Schedule')).toBeVisible();
  });
});
