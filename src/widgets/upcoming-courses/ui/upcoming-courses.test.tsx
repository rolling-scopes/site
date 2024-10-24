import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ROUTES } from '@/core/const';
import type { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants.ts';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { UpcomingCourses } from '@/widgets/upcoming-courses';

const mockedData: Course[] = [
  {
    id: '1',
    title: 'JS / Front-end Pre-school RU',
    startDate: 'Jun 24, 2024',
    language: ['ru'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_PRESCHOOL_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '2',
    title: 'JS / Front-end EN',
    startDate: 'Oct, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '3',
    title: 'JS / Front-end RU',
    startDate: 'Oct, 2024',
    language: ['ru'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.JS_RU}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '4',
    title: 'React',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.REACT}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '5',
    title: 'Angular',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.ANGULAR}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
  {
    id: '6',
    title: 'AWS Fundamentals',
    startDate: 'Jul 1, 2024',
    language: ['en'],
    detailsUrl: `/${ROUTES.COURSES}/${ROUTES.AWS_FUNDAMENTALS}`,
    iconSrc: MOCKED_IMAGE_PATH,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    mode: 'online',
    altTitle: MOCKED_IMAGE_PATH.src,
    backgroundStyle: {
      backgroundColor: '#fff',
      accentColor: '#fff',
    },
  },
];

vi.mock('@/shared/helpers/getActualData', () => {
  return { getActualData: vi.fn().mockImplementation(() => mockedData) };
});

describe('Courses', () => {
  beforeEach(() => {
    renderWithRouter(<UpcomingCourses />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Upcoming courses');

    expect(titleElement).toBeInTheDocument();
  });

  it('renders no more than 5 course cards', () => {
    const coursesList = screen.getByTestId('courses-list');
    const courseCardsWithoutButton = coursesList.children.length - 1;

    expect(courseCardsWithoutButton).toEqual(5);
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
