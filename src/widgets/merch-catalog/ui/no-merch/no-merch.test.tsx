import { render, screen } from '@testing-library/react';
import { ImageProps } from 'next/image';
import { describe, it, vi } from 'vitest';

import { NoMerch } from './no-merch';

vi.mock('next/image', () => ({
  default: (props: ImageProps) => {
    return <img src={props.src as string} alt={props.alt} />;
  },
}));

describe('NoMerch', () => {
  it.skip('should render the correct "not available" text', () => {
    render(<NoMerch />);

    const textElement = screen.getByText('No merchandise available at this time.');

    expect(textElement).toBeInTheDocument();
  });

  it.skip('should render an image with the correct alt text', () => {
    render(<NoMerch />);

    const imageElement = screen.getByAltText('No merchandise available');

    expect(imageElement).toBeInTheDocument();
  });
});
