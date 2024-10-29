import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Benefits } from '@/widgets/benefits';
import { benefitMentorshipHome } from 'data';

describe('Benefits', () => {
  beforeEach(() => {
    renderWithRouter(<Benefits />);
  });

  it('renders the title', () => {
    expect(screen.getByText('Mentorship is for you if you')).toBeVisible();
  });

  it.each(benefitMentorshipHome.benefits || [])('renders the benefit $id with the given info', ({ id, text }) => {
    const benefit = screen.getAllByTestId('benefit').at(id - 1);

    expect(benefit).toHaveTextContent(text);
  });
});
