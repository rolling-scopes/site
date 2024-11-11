import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Courses } from './courses';
import { Course } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

const widgetTitle = 'All courses';
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'React course',
    iconSrc: MOCKED_IMAGE_PATH,
    altTitle: MOCKED_IMAGE_PATH.src,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: {
      backgroundColor: '#EEF3FE',
      accentColor: '#7356BF',
    },
  },
  {
    id: '2',
    title: 'React course 2',
    iconSrc: MOCKED_IMAGE_PATH,
    altTitle: MOCKED_IMAGE_PATH.src,
    iconSmall: MOCKED_IMAGE_PATH,
    secondaryIcon: MOCKED_IMAGE_PATH,
    enroll: 'enroll',
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: {
      backgroundColor: '#EEF3FE',
      accentColor: '#7356BF',
    },
  },
];

describe('Courses (other courses) component', () => {
  it('renders widget without crashing and display correct content', () => {
    renderWithRouter(<Courses courses={mockCourses} />);
    const widget = screen.getByTestId('all-courses');
    const title = screen.getByTestId('widget-title');
    const courseCards = screen.getAllByTestId('course-card');

    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(widgetTitle);
    expect(courseCards.length).toBe(mockCourses.length);
    courseCards.forEach((card, index) => {
      expect(card).toBeVisible();
      expect(card).toHaveTextContent(mockCourses[index].title);
    });
  });
});
