import { act, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Image } from './image';
import { renderWithRouter } from '@/shared/__tests__/utils';
import rsSchool from '@/shared/assets/rs-school.webp';

const { mockSrcSet, mockSizes } = vi.hoisted(() => ({
  mockSrcSet: 'srcSet',
  mockSizes: 'sizes',
}));

vi.mock('@/shared/helpers/generateSrcSet.ts', () => ({ generateSrcSet: vi.fn().mockReturnValue('srcSet') }),
);

vi.mock('@/shared/helpers/generateSizes.ts', () => ({ generateSizes: vi.fn().mockReturnValue('sizes') }),
);

vi.mock('@/shared/constants.ts', () => ({ IS_DEV: false }));

describe('Image', () => {
  it('renders the lazy image correctly', () => {
    renderWithRouter(<Image src={rsSchool} alt="rs-school" />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', rsSchool);
    expect(img).toHaveAttribute('srcset', mockSrcSet);
    expect(img).toHaveAttribute('sizes', mockSizes);
    expect(img).toHaveAttribute('decoding', 'async');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('alt', 'rs-school');
    expect(img).toHaveAttribute('draggable', 'false');
    expect(img).toHaveAttribute('fetchpriority', 'low');
  });

  it('renders the eager image correctly', () => {
    renderWithRouter(<Image src={rsSchool} alt="rs-school" lazy={false} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', rsSchool);
    expect(img).toHaveAttribute('srcset', mockSrcSet);
    expect(img).toHaveAttribute('sizes', mockSizes);
    expect(img).toHaveAttribute('decoding', 'auto');
    expect(img).toHaveAttribute('loading', 'eager');
    expect(img).toHaveAttribute('alt', 'rs-school');
    expect(img).toHaveAttribute('draggable', 'false');
    expect(img).toHaveAttribute('fetchpriority', 'high');
  });

  it('handles image load error and removes srcSet and sizes', () => {
    renderWithRouter(<Image src={rsSchool} alt="rs-school" />);

    const img = screen.getByRole('img');

    act(() => {
      img.dispatchEvent(new Event('error'));
    });

    expect(img).not.toHaveAttribute('srcSet');
    expect(img).not.toHaveAttribute('sizes');
  });
});
