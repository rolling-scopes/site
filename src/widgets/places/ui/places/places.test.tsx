import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Places } from '@/widgets/places';

describe('Places component', () => {
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

  it.skip('renders the marquee with correct places', () => {
    render(<Places />);

    places.forEach((place) => {
      const allInstances = screen.getAllByText(place);

      expect(allInstances.length).toBe(2);
    });
  });

  it.skip('renders divider after each place except the last one', () => {
    render(<Places />);
    const dividers = screen.getAllByTestId('divider');

    expect(dividers).toHaveLength(places.length * 2);
  });
});
