import { render, screen, within } from '@testing-library/react';

import { MentorsFeedback } from './mentors-feedback';
import { MOCKED_SEVERAL_MENTORS_FEEDBACK } from '@/shared/__tests__/constants';

describe('MentorsFeedback component', () => {
  it('renders the mentors feedback list', async () => {
    render(<MentorsFeedback mentorsFeedback={MOCKED_SEVERAL_MENTORS_FEEDBACK} />);

    expect(screen.getByTestId('mentors-feedback')).toBeInTheDocument();
    expect(screen.getByTestId('widget-title')).toBeInTheDocument();

    const mentorsList = screen.getByTestId('mentors-feedback-list');

    expect(mentorsList).toBeInTheDocument();

    const mentorCards = within(mentorsList).getAllByTestId('mentor-feedback-card');

    expect(mentorCards).toHaveLength(8);
  });

  it('renders an empty mentors list when no mentorsFeedback is passed', async () => {
    render(<MentorsFeedback mentorsFeedback={[]} />);

    expect(screen.getByTestId('mentors-feedback')).toBeInTheDocument();
    expect(screen.getByTestId('widget-title')).toBeInTheDocument();

    const mentorsList = screen.getByTestId('mentors-feedback-list');

    expect(mentorsList).toBeInTheDocument();

    expect(within(mentorsList).queryByTestId('mentor-feedback-card')).not.toBeInTheDocument();
  });
});
