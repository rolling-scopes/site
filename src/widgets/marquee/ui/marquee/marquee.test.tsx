import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Marquee } from '@/widgets/marquee';

const places = [
  'Kazakhstan',
  'Belarus',
  'Latvia',
  'Poland',
  'Turkey',
  'Georgia',
  'Montenegro',
  'Uzbekistan',
  'Online',
  'Kyrgyzstan',
  'Lithuania',
];

const placesItems = 33;
const placeGroups = 3;

describe('Marquee component', () => {
  it('renders the marquee with correct places', () => {
    render(<Marquee items={places} />);

    places.forEach((place) => {
      const allInstances = screen.getAllByText(place);

      expect(allInstances.length).toBe(placeGroups);
    });
  });

  it('renders divider after each place except the last one', () => {
    render(<Marquee items={places} />);
    const dividers = screen.getAllByTestId('divider');

    expect(dividers).toHaveLength(placesItems);
  });
});
