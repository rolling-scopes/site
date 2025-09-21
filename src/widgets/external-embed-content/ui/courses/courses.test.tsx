import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Courses } from './courses';
import { mockedCourses } from '@/shared/__tests__/constants';
import { COURSE_TITLES } from '@/shared/constants';

describe('Courses (other courses) component', () => {
  it('renders widget without crashing and display correct content', () => {
    render(<Courses courses={mockedCourses} />);
    const widget = screen.getByTestId('all-courses');
    const courseCards = screen.getAllByTestId('course-card');
    const courseTitles = screen.getAllByTestId('subtitle');

    expect(widget).toBeVisible();
    expect(courseCards.length).toBe(mockedCourses.length);

    courseCards.forEach((card) => expect(card).toBeVisible());

    courseTitles.forEach((title) => {
      const course = mockedCourses.find((c) => {
        const mark = c.title === COURSE_TITLES.ANGULAR ? ` (${c.subTitle})` : '';

        return `${c.title}${mark}` === title.textContent;
      });

      expect(course).toBeDefined();
    });
  });
});
