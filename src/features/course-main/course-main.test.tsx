import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { CourseMain } from './course-main';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';
import { dayJS } from '@/app/services/dayjs';
import { CourseStatus } from '@/app/types';

vi.mock('@/app/hooks');
vi.mock('@/app/hooks');
vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn(() => [mockedCourse, mockedCourseAvailable, mockedCourseUpcoming]),
}));

const reactCourseTitle = 'React';
const angularCourseTitle = 'Angular';

const mockedCourse = {
  title: 'Node.js',
  language: ['English'],
  type: 'Mentoring Program',
  mode: 'online',
  enroll: 'https://wearecommunity.io/events/nodejs-rs-2024q1',
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
};

const mockedCourseAvailable = {
  ...mockedCourse,
  title: reactCourseTitle,
  startDate: dayJS().format('D MMM, YYYY'),
};

const mockedCourseUpcoming = {
  ...mockedCourse,
  title: angularCourseTitle,
  startDate: dayJS().add(1, 'month').format('D MMM, YYYY'),
};

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

  it('renders the section label "PLANNED" correctly', () => {
    const labelElement = screen.getByText(CourseStatus.PLANNED);
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
  it('renders the section with correct label "AVAILABLE"', () => {
    render(<CourseMain courseName={reactCourseTitle} type="Mentoring Program" />);
    const labelElement = screen.getByText(CourseStatus.AVAILABLE);
    expect(labelElement).toBeVisible();
  });

  it('renders the section with correct label "UPCOMING"', () => {
    render(<CourseMain courseName={angularCourseTitle} type="Mentoring Program" />);
    const labelElement = screen.getByText(CourseStatus.UPCOMING);
    expect(labelElement).toBeVisible();
  });
});
