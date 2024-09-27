import { screen } from '@testing-library/react';
import { CourseMain } from './course-main';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { dayJS } from '@/shared/helpers/dayJS';

vi.mock('@/app/hooks/use-course-by-title');
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();

  return {
    ...actual,
    useLoaderData: vi.fn(() => [mockedCourse, mockedCourseAvailable, mockedCourseUpcoming]),
  };
});

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
    renderWithRouter(<CourseMain courseName="Node.js" />);
  });

  it('renders the title correctly', async () => {
    const titleElement = await screen.findByText('Node.js Course');

    expect(titleElement).toBeVisible();
  });

  it('renders the section label "PLANNED" correctly', () => {
    const labelElement = screen.getByText('planned');

    expect(labelElement).toBeVisible();
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

describe('Course labels are correct', () => {
  it('renders the section with correct label "AVAILABLE"', () => {
    renderWithRouter(<CourseMain courseName={reactCourseTitle} />);
    const labelElement = screen.getByText('available');

    expect(labelElement).toBeVisible();
  });

  it('renders the section with correct label "UPCOMING"', () => {
    renderWithRouter(<CourseMain courseName={angularCourseTitle} />);
    const labelElement = screen.getByText('upcoming');

    expect(labelElement).toBeVisible();
  });
});
