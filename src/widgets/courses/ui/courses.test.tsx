import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Courses } from './courses';
import { mockedCourses } from '@/shared/__tests__/constants';

const widgetTitle = 'All courses';

describe('Courses (other courses) component', () => {
  it('renders widget without crashing and display correct content', async () => {
    const courses = await Courses();

    render(courses);
    const widget = screen.getByTestId('all-courses');
    const title = screen.getByTestId('widget-title');
    const courseCards = screen.getAllByTestId('course-card');
    const courseTitles = screen.getAllByTestId('subtitle');

    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(widgetTitle);
    expect(courseCards.length).toBe(mockedCourses.length);

    courseCards.forEach((card) => expect(card).toBeVisible());

    courseTitles.forEach((title) => {
      const course = mockedCourses.find((c) => c.title === title.textContent);

      expect(course).toBeDefined();
    });
  });
});
