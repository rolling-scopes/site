import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { Mock } from 'vitest';
import { CourseMain } from './course-main';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { useCourseByTitle } from '@/app/hooks';
import { dayJS } from '@/app/services/dayjs';
import { Labels } from '@/app/types';

vi.mock('@/app/hooks');

const testCourse = {
  loading: false,
  error: '',
  course: {
    title: 'Node.js',
    language: ['English'],
    type: 'Mentoring Program',
    mode: 'online',
    enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
    secondaryIcon: MOCKED_IMAGE_PATH,
    startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
  },
};

describe('CourseMain', () => {
  beforeEach(() => {
    (useCourseByTitle as Mock).mockReturnValue(testCourse);

    act(() => {
      render(<CourseMain courseName="Node.js" type="Mentoring Program" />);
    });
  });

  it('renders the title correctly', async () => {
    const titleElement = await screen.findByText('Node.js Course');
    expect(titleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const labelElement = screen.getByText(Labels.PLANNED);
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
      'https://wearecommunity.io/events/nodejs-rs-2024q1',
    );
  });

  it('renders the image with correct source', () => {
    const imageElement = screen.getByRole('img', { name: /Node.js/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});

describe('CourseMain', () => {
  it('renders the section with correct label depending on date', () => {
    (useCourseByTitle as Mock).mockReturnValueOnce({
      ...testCourse,
      course: {
        ...testCourse.course,
        startDate: dayJS().format('D MMM, YYYY'),
      },
    });
    render(<CourseMain courseName="Node.js course" type="Mentoring Program" />);
    const labelElement = screen.getByText(Labels.AVAILABLE);
    expect(labelElement).toBeVisible();
  });
});

describe('CourseMain', () => {
  it('renders the section with correct label depending on date', () => {
    (useCourseByTitle as Mock).mockReturnValueOnce({
      ...testCourse,
      course: {
        ...testCourse.course,
        startDate: dayJS().add(1, 'month').format('D MMM, YYYY'),
      },
    });
    render(<CourseMain courseName="Node.js course" type="Mentoring Program" />);
    const labelElement = screen.getByText(Labels.UPCOMING);
    expect(labelElement).toBeVisible();
  });
});
