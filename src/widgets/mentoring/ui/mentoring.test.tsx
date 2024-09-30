import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Mentoring } from '@/widgets/mentoring';
import { mentorshipBenefits } from 'data';

describe('Mentoring', () => {
  beforeEach(() => {
    renderWithRouter(<Mentoring />);
  });

  it('renders the title', () => {
    expect(screen.getByText('Mentoring is for you if you')).toBeVisible();
  });

  it.each(mentorshipBenefits)('renders the benefit $id with the given info', ({ info }) => {
    const benefit = screen.getByText(info);

    expect(benefit).toHaveTextContent(info);
  });
});
