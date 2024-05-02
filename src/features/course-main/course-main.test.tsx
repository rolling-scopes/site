import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { CourseMain } from './course-main';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

const mockedCourseNode = {
  title: 'Node.js',
  language: ['English'],
  type: 'Mentoring Program',
  mode: 'online',
  enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: '22 Jan, 3060',
};

const mockedCourseReact = {
  title: 'React.js',
  language: ['English'],
  type: 'Mentoring Program',
  mode: 'online',
  enroll: 'https://wearecommunity.io/events/react-rs-2024q1',
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: '22 Jan, 2024',
};

vi.mock('@/app/hooks');
vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn(() => [mockedCourseNode, mockedCourseReact]),
}));

describe('CourseMain', () => {
  beforeEach(() => {
    act(() => {
      render(<CourseMain courseName="Node.js" type="Mentoring Program" />);
    });
  });

  it('renders the title correctly', async () => {
    const titleElement = await screen.findByText('Node.js Course');
    expect(titleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const labelElement = screen.getByText('available');
    expect(labelElement).toBeVisible();
  });

  it('renders the section with correct label depending on date', () => {
    render(<CourseMain courseName="React" type="Mentoring Program" />);
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
      'https://wearecommunity.io/events/nodejs-rs-2024q1',
    );
  });

  it('renders the image with correct source', () => {
    const imageElement = screen.getByRole('img', { name: /Node.js/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
