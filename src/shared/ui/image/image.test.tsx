import { act, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { Image } from './image';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants.ts';
import { renderWithRouter } from '@/shared/__tests__/utils';

const { mockSrcSet, mockSizes } = vi.hoisted(() => ({
  mockSrcSet: 'srcSet',
  mockSizes: 'sizes',
}));

vi.mock('@/shared/helpers/generateSrcSet.ts', () => ({ generateSrcSet: vi.fn().mockReturnValue('srcSet') }));

vi.mock('@/shared/helpers/generateSizes.ts', () => ({ generateSizes: vi.fn().mockReturnValue('sizes') }));

describe('Image', () => {
  beforeAll(() => {
    vi.stubEnv('NEXT_PUBLIC_DEV', 'false');
  });

  it('renders the lazy image correctly', () => {
    renderWithRouter(<Image img={MOCKED_IMAGE_PATH} alt="rs-school" />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
    expect(img).toHaveAttribute('srcset', mockSrcSet);
    expect(img).toHaveAttribute('sizes', mockSizes);
    expect(img).toHaveAttribute('decoding', 'async');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('alt', 'rs-school');
    expect(img).toHaveAttribute('draggable', 'false');
    expect(img).toHaveAttribute('fetchpriority', 'low');
  });

  it('renders the eager image correctly', () => {
    renderWithRouter(<Image img={MOCKED_IMAGE_PATH} alt="rs-school" lazy={false} />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
    expect(img).toHaveAttribute('srcset', mockSrcSet);
    expect(img).toHaveAttribute('sizes', mockSizes);
    expect(img).toHaveAttribute('decoding', 'auto');
    expect(img).toHaveAttribute('loading', 'eager');
    expect(img).toHaveAttribute('alt', 'rs-school');
    expect(img).toHaveAttribute('draggable', 'false');
    expect(img).toHaveAttribute('fetchpriority', 'high');
  });

  it('handles image load error and removes srcSet and sizes', () => {
    renderWithRouter(<Image img={MOCKED_IMAGE_PATH} alt="rs-school" />);

    const img = screen.getByRole('img');

    act(() => {
      img.dispatchEvent(new Event('error'));
    });

    expect(img).not.toHaveAttribute('srcSet');
    expect(img).not.toHaveAttribute('sizes');
  });
});
