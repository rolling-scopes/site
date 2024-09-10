import { screen } from '@testing-library/react';
import {
  Mock,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { Courses } from './ui/courses';
import { ROUTES } from '@/app/const';

import { renderWithRouter } from '@/shared/__tests__/utils';
import { useWindowSize } from '@/shared/hooks/use-window-size';

const mockedData = [
  {
    id: '1',
    title: 'JS / Front-end Pre-school RU',
    startDate: 'Jun 24, 2024',
    language: ['ru'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
  },
  {
    id: '2',
    title: 'JS / Front-end EN',
    startDate: 'Oct, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
  },
  {
    id: '3',
    title: 'JS / Front-end RU',
    startDate: 'Oct, 2024',
    language: ['ru'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
  },
  {
    id: '4',
    title: 'React',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
  },
  {
    id: '5',
    title: 'Angular',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
  },
  {
    id: '6',
    title: 'AWS Fundamentals',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
  },
];

vi.mock('@/app/hooks/use-data-by-name', () => {
  return {
    useDataByName: vi.fn().mockImplementation(() => ({
      data: mockedData,
      error: null,
      loading: false,
    })),
  };
});

vi.mock('@/shared/hooks/use-window-size', () => {
  return {
    useWindowSize: vi.fn().mockReturnValue({
      width: 810,
      height: 900,
    }),
  };
});

describe('Courses', () => {
  beforeEach(() => {
    renderWithRouter(<Courses />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Upcoming courses');

    expect(titleElement).toBeInTheDocument();
  });

  it.skip('renders no more than 5 course cards', () => {
    // TODO remove 'skip' after 'data-testid' will be added to CourseCard
    const courseCards = screen.getAllByRole('link');

    expect(courseCards.length).toBeLessThan(5);
  });

  it('renders link with "More details" on window size more than 810px', () => {
    (useWindowSize as Mock).mockReturnValue({
      width: 811,
      height: 900,
    });
    renderWithRouter(<Courses />);
    const courseCards = screen.getAllByRole('link', { name: 'More details' });

    expect(courseCards.length).toBeLessThanOrEqual(5);
  });

  it('renders the Go to RS School button', () => {
    const goButton = screen.getByText('Go to courses');

    expect(goButton).toBeInTheDocument();
  });

  it('should render RsBanner', () => {
    const rsBanner = screen.getByTestId('rs-banner');

    expect(rsBanner).toBeInTheDocument();
  });
});
