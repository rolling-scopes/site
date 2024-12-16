import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Places } from '@/widgets/places';
import { places } from '@/widgets/places/constants';

const placesItems = 33;
const placeGroups = 3;

describe('Places component', () => {
  it('renders the marquee with correct places', () => {
    render(<Places />);

    places.forEach((place) => {
      const allInstances = screen.getAllByText(place);

      expect(allInstances.length).toBe(placeGroups);
    });
  });

  it('renders divider after each place except the last one', () => {
    render(<Places />);
    const dividers = screen.getAllByTestId('divider');

    expect(dividers).toHaveLength(placesItems);
  });
});
