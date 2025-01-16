import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TrainerCard } from './trainer-card';
import { MOCKED_TRAINER } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('TrainerCard', () => {
  const mockProps = MOCKED_TRAINER;

  it('should render correctly', () => {
    renderWithRouter(<TrainerCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeVisible();
    expect(screen.getByText(mockProps.role)).toBeVisible();
    expect(screen.getByText(mockProps.bio)).toBeVisible();
    expect(screen.getByAltText(`${mockProps.name} ${mockProps.role}`)).toBeVisible();
  });
});
