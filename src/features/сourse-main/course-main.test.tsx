import { render, screen } from '@testing-library/react';
import { CourseMain } from './course-main';
import { useCourseByTitle } from '@/app/hooks';
import { Mock } from 'vitest';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { act } from 'react-dom/test-utils';

vi.mock('@/app/hooks');

describe('CourseMain', () => {
  const testCourse = {
    loading: false,
    error: '',
    course: {
      title: 'Node.js course',
      language: ['English'],
      type: 'Mentoring Program',
      mode: 'online',
      enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
      secondaryIcon: MOCKED_IMAGE_PATH,
      startDate: '22 Jan, 2060'
    }
  };

  beforeEach(() => {
    (useCourseByTitle as Mock).mockReturnValue(testCourse);

    act(() => {
      render(<CourseMain courseName="Node.js course" type="Mentoring Program" />);
    });
  });

  it('renders the title correctly', async () => {
    const titleElement = await screen.findByText('Node.js course');
    expect(titleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const labelElement = screen.getByText('avialable');
    expect(labelElement).toBeVisible();
  });

  it('renders the section with correct label depending on date', () => {
    (useCourseByTitle as Mock).mockReturnValueOnce({
      ...testCourse,
      course: {
        ...testCourse.course,
        startDate: '22 Jan, 2024'
      }
    });
    render(<CourseMain courseName="Node.js course" type="Mentoring Program" />);
    const labelElement = screen.getByText('upcoming');
    expect(labelElement).toBeVisible();
  });

  it('renders the Subtitle correctly', () => {
    const subtitle = screen.getByText('Mentoring Program');
    expect(subtitle).toBeVisible();
  });

  it('renders enroll button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /enroll/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute(
      'href',
      'https://wearecommunity.io/events/nodejs-rs-2024q1'
    );
  });

  it('renders the image with correct source', () => {
    const imageElement = screen.getByRole('img', { name: /Node.js course/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
