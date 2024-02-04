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

  it('renders "Become a student" button with correct href when courseName is "javascript"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: { detailsUrl: 'http://course-url.com' } });
    render(<About courseName="javascript" />);
    expect(screen.getByRole('link', { name: /Become a student/i })).toHaveAttribute(
      'href',
      'http://course-url.com'
    );
    expect(
      screen.getByText(/Feel the desire to share your experience and knowledge/i)
    ).toBeVisible();
  });

  it('renders "Become a student" button with fallback href when courseName is not "react" or "javascript"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="nodejs" />);
    expect(screen.getByRole('link', { name: /Become a student/i })).toHaveAttribute('href', '#');
    expect(
      screen.getByText(
        /After accomplishing all three stages of education, students will receive an electronic certificate of completion/i
      )
    ).toBeInTheDocument();
  });

  it('renders "Free education" item when courseName is "react"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="react" />);
    expect(screen.getByText('Free education')).toBeVisible();
  });

  it('renders "Schedule" item when courseName is not "react"', () => {
    (useCourseByTitle as Mock).mockReturnValue({ course: null });
    render(<About courseName="nodejs" />);
    expect(screen.getByText('Schedule')).toBeVisible();
  });
});
