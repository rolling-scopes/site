import { screen } from '@testing-library/react';
import { HeroCourse } from './hero-course';
import { ROUTES } from '@/app/const';
import type { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { dayJS } from '@/shared/helpers/dayJS';
import { COURSE_TITLES } from 'data';

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

const mockedCourse: Course = {
  id: '6',
  title: COURSE_TITLES.NODE,
  iconSrc: MOCKED_IMAGE_PATH,
  iconSmall: MOCKED_IMAGE_PATH,
  secondaryIcon: MOCKED_IMAGE_PATH,
  startDate: dayJS().subtract(2, 'month').format('D MMM, YYYY'),
  language: ['en'],
  mode: 'online',
  detailsUrl: `/${ROUTES.COURSES}/${ROUTES.NODE_JS}`,
  enroll: 'https://test.com',
  backgroundStyle: {
    backgroundColor: '#F0F9F4',
    accentColor: '#AEDF36',
  },
};

const mockedCourseAvailable: Course = {
  ...mockedCourse,
  title: reactCourseTitle,
  startDate: dayJS().format('D MMM, YYYY'),
};

const mockedCourseUpcoming: Course = {
  ...mockedCourse,
  title: angularCourseTitle,
  startDate: dayJS().add(1, 'month').format('D MMM, YYYY'),
};

describe('HeroCourse component', () => {
  beforeEach(() => {
    renderWithRouter(<HeroCourse courseName="Node.js" />);
  });

  it('renders the title and label correctly', async () => {
    const titleElement = await screen.findByText('Node.js Course');
    const labelElement = screen.getByText('planned');

    expect(titleElement).toBeVisible();
    expect(labelElement).toBeVisible();
  });

  it('renders enroll button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /enroll/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute(
      'href',
      'https://test.com',
    );
  });

  it('renders the image with correct source', () => {
    const imageElement = screen.getByRole('img', { name: /Node.js/i });

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
