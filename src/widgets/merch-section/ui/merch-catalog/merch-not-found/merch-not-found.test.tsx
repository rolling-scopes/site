import { render, screen } from '@testing-library/react';
import { ImageProps } from 'next/image';
import { describe, it, vi } from 'vitest';

import MerchNotFound from './merch-not-found';

vi.mock('next/image', () => ({
  default: (props: ImageProps) => {
    return <img src={props.src as string} alt={props.alt} />;
  },
}));

describe('MerchNotFound', () => {
  it('should render the correct "not available" text', () => {
    render(<MerchNotFound />);

    const textElement = screen.getByText('No merchandise available at this time.');

    expect(textElement).toBeInTheDocument();
  });

  it('should render an image with the correct alt text', () => {
    render(<MerchNotFound />);

    const imageElement = screen.getByAltText('No merchandise available');

    expect(imageElement).toBeInTheDocument();
  });
});
