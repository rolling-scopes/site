import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Courses } from './courses';
import { mockedCourses } from '@/shared/__tests__/constants.ts';

const widgetTitle = 'All courses';

describe('Courses (other courses) component', () => {
  it('renders widget without crashing and display correct content', async () => {
    const courses = await Courses();

    render(courses);
    const widget = screen.getByTestId('all-courses');
    const title = screen.getByTestId('widget-title');
    const courseCards = screen.getAllByTestId('course-card');

    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent(widgetTitle);
    expect(courseCards.length).toBe(mockedCourses.length);
    courseCards.forEach((card, index) => {
      expect(card).toBeVisible();
      expect(card).toHaveTextContent(mockedCourses[index].title);
    });
  });
});
