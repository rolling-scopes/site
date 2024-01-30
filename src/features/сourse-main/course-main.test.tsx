import { render, screen } from '@testing-library/react';
import { CourseMain } from './course-main';
import { useCourseByTitle } from '@/app/hooks';
import { Mock } from 'vitest';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { act } from 'react-dom/test-utils';

vi.mock('@/app/hooks');

describe('CourseMain', () => {
  beforeEach(() => {
    (useCourseByTitle as Mock).mockReturnValue({
      loading: false,
      error: '',
      course: {
        title: 'Node.js course',
        language: ['English'],
        mode: 'online',
        detailsUrl: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
        secondaryIcon: MOCKED_IMAGE_PATH,
        startDate: '2024-01-01'
      }
    });

    act(() => {
      render(<CourseMain courseType="Node.js course" />);
    });
  });

  it('renders the title correctly', async () => {
    const titleElement = await screen.findByText('Node.js course');
    expect(titleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const labelElement = screen.getByText('unavailable');
    expect(labelElement).toBeVisible();
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
