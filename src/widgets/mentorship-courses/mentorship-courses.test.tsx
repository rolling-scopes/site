import { screen, within } from '@testing-library/react';

import { renderWithRouter } from '@/shared/__tests__/utils';
import { mentorshipCourseTitles } from '@/views/mentorship/constants';
import { MentorshipCourses } from '@/widgets/mentorship-courses/mentorship-courses';
import { MentorshipCourseTitles } from 'data';

describe('Mentorship courses', () => {
  it('renders the correct content', async () => {
    const widget = await MentorshipCourses();

    renderWithRouter(widget);

    const title = screen.getByTestId('widget-title');
    const courseCards = screen.getAllByTestId('course-card');

    expect(title).toBeVisible();
    expect(title.textContent).toBe('Courses That Need Mentors');
    expect(courseCards).toHaveLength(4);

    courseCards.forEach((card) => {
      const courseTitle = within(card).getByTestId('subtitle');
      const isMentorshipCourse = mentorshipCourseTitles.includes(
        courseTitle.textContent as MentorshipCourseTitles,
      );

      expect(card).toBeVisible();
      expect(isMentorshipCourse).toBeTruthy();
    });
  });
});
