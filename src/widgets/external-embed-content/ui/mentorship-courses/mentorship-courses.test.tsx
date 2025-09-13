import { screen, within } from '@testing-library/react';

import { MentorshipCourseTitles } from '@/entities/mentor/types';
import { mockedCourses } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { mentorshipCourseTitles } from '@/views/mentorship/constants';
import { MentorshipCourses } from '@/widgets/external-embed-content';

describe('Mentorship courses', () => {
  it('renders the correct content', async () => {
    renderWithRouter(<MentorshipCourses courses={mockedCourses} />);

    const courseCards = screen.getAllByTestId('course-card');

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
