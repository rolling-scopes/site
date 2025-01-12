import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MentorFeedbackCard } from './mentor-feedback-card';
import { MOCKED_MENTORS_FEEDBACK } from '@/shared/__tests__/constants';

describe('MentorFeedbackCard', () => {
  const mockProps = MOCKED_MENTORS_FEEDBACK;

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
    expect(screen.getByTestId('card-content')).toHaveTextContent(mockProps.review);
  });

  it('should render the "See more" button when the review is long', () => {
    const longReviewProps = {
      ...mockProps,
      review: 'a'.repeat(600),
    };

    render(<MentorFeedbackCard {...longReviewProps} />);

    expect(screen.getByTestId('see-more-button')).toBeInTheDocument();
  });

  it('should not render the "See more" button when the review is short', () => {
    const shortReviewProps = {
      ...mockProps,
      review: 'a'.repeat(300),
    };

    render(<MentorFeedbackCard {...shortReviewProps} />);

    expect(screen.queryByTestId('see-more-button')).toBeNull();
  });

  it('should open the modal when "See more" button is clicked', async () => {
    const longReviewProps = {
      ...mockProps,
      review: 'a'.repeat(600),
    };

    render(<MentorFeedbackCard {...longReviewProps} />);

    const seeMoreButton = screen.getByTestId('see-more-button');

    fireEvent.click(seeMoreButton);

    expect(screen.getByTestId('modal-review-content')).toBeVisible();
    expect(screen.getByTestId('modal-content')).toBeVisible();
    expect(screen.getByTestId('modal-overlay')).toBeVisible();
  });

  it('should close the modal when the close button is clicked', async () => {
    const longReviewProps = {
      ...mockProps,
      review: 'a'.repeat(600),
    };

    render(<MentorFeedbackCard {...longReviewProps} />);
    const seeMoreButton = screen.getByTestId('see-more-button');

    fireEvent.click(seeMoreButton);

    expect(screen.getByTestId('modal-review-content')).toBeVisible();
    expect(screen.getByTestId('modal-content')).toBeVisible();

    const closeButton = screen.getByTestId('modal-close-button');

    fireEvent.click(closeButton);

    expect(screen.queryByTestId('modal-review-content')).toBeNull();
    expect(screen.queryByTestId('modal-content')).toBeNull();
    expect(screen.queryByTestId('modal-overlay')).toBeNull();
  });
});
