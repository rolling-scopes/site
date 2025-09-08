import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MentorFeedbackCard } from '@/entities/mentor';
import { MOCKED_MENTORS_FEEDBACK } from '@/shared/__tests__/constants';
import { Paragraph } from '@/shared/ui/paragraph';

describe('MentorFeedbackCard', () => {
  const mockProps = MOCKED_MENTORS_FEEDBACK;
  const longReviewProps = {
    ...mockProps,
    review: [<Paragraph key="0">{['a'.repeat(600)]}</Paragraph>],
  };
  const shortReviewProps = {
    ...mockProps,
    review: [<Paragraph key="1">{['a'.repeat(300)]}</Paragraph>],
  };

  it('should render the card with correct data', () => {
    render(<MentorFeedbackCard {...mockProps} />);

    expect(screen.getByTestId('mentor-feedback-card')).toBeInTheDocument();
    expect(screen.getByTestId('card-info')).toBeInTheDocument();
    expect(screen.getByTestId('mentor-photo')).toHaveAttribute(
      'alt',
      `${mockProps.name} ${mockProps.course}`,
    );
    expect(screen.getByTestId('card-title')).toHaveTextContent(mockProps.name);
    expect(screen.getByTestId('card-subtitle')).toHaveTextContent(`Course: ${mockProps.course}`);
    expect(screen.getByTestId('card-content')).toBeInTheDocument();
  });

  it('should render the "See more" button when the review is long', () => {
    render(<MentorFeedbackCard {...longReviewProps} />);

    expect(screen.getByTestId('see-more-button')).toBeInTheDocument();
  });

  it('should not render the "See more" button when the review is short', () => {
    render(<MentorFeedbackCard {...shortReviewProps} />);

    expect(screen.queryByTestId('see-more-button')).toBeNull();
  });

  it('should open the modal when "See more" button is clicked', async () => {
    render(<MentorFeedbackCard {...longReviewProps} />);

    const seeMoreButton = screen.getByTestId('see-more-button');

    fireEvent.click(seeMoreButton);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', async () => {
    render(<MentorFeedbackCard {...longReviewProps} />);
    const seeMoreButton = screen.getByTestId('see-more-button');

    fireEvent.click(seeMoreButton);

    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByTestId('modal-close-button');

    fireEvent.click(closeButton);

    waitFor(expect(screen.queryByTestId('modal')).toBeNull);
  });
});
