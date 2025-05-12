import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Badge } from './badge';
import type { StaticImageData } from 'next/image';

const mockImage: StaticImageData = {
  src: '/test-img.jpg',
  height: 100,
  width: 100,
};

describe('Badge component', () => {
  const mockProps = {
    title: 'Badge Title',
    paragraphs: [
      'Paragraph one',
      'Paragraph two',
    ],
    image: mockImage,
    alt: 'Some description',
  };

  beforeEach(() => {
    render(<Badge {...mockProps} />);
  });

  it('renders the badge container', () => {
    const badge = screen.getByTestId('badge');

    expect(badge).toBeVisible();
  });

  it('renders a title element', () => {
    const title = screen.getByText(mockProps.title);

    expect(title).toBeInTheDocument();
  });

  it('renders all paragraph elements', () => {
    mockProps.paragraphs.forEach((text) => {
      const p = screen.getByText(text);

      expect(p).toBeInTheDocument();
    });
  });

  it('renders an image with correct alt and src attributes', () => {
    const image = screen.getByTestId('badge-img');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('alt', mockProps.alt);
    expect(image).toHaveAttribute('src', expect.stringContaining(mockImage.src));
  });
});
