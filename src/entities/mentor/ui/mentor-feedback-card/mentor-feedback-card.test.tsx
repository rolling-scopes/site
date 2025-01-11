import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MentorFeedbackCard } from './mentor-feedback-card';
import { MOCKED_MENTORS_FEEDBACK } from '@/shared/__tests__/constants';

vitest.mock('next/image', () => ({
  default: (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
    <img {...props} data-testid="mocked-image" />
  ),
}));

describe('MentorFeedbackCard', () => {
  const mockProps = MOCKED_MENTORS_FEEDBACK;

  it('should render correctly', () => {
    render(<MentorFeedbackCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeVisible();
    expect(screen.getByText(mockProps.course)).toBeVisible();
    expect(screen.getByText(mockProps.review)).toBeVisible();
    const image = screen.getByTestId('mocked-image');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', `${mockProps.name} ${mockProps.course}`);
  });
});
