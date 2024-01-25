import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Alumni } from './Alumni';
import { useWindowSize } from '@/shared/hooks';

vi.mock('@/shared/hooks', () => {
  return {
    useWindowSize: vi.fn().mockReturnValue({ width: 2000, height: 2000 })
  };
});

describe('Alumni', () => {
  it('renders the title correctly', () => {
    render(<Alumni />);
    const titleElement = screen.getByText('Our alumni');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the paragraph correctly', () => {
    render(<Alumni />);
    const paragraphElement = screen.getByText(/We are immensely proud of RS School alumni/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders six images for small screens', () => {
    (useWindowSize as any).mockReturnValue({ width: 800, height: 600 });
    render(<Alumni />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(6);
  });

  it('renders twelve images for medium screens', () => {
    (useWindowSize as any).mockReturnValue({ width: 1440, height: 900 });
    render(<Alumni />);
    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(12);
  });

  it('renders all images for large screens', () => {
    (useWindowSize as any).mockReturnValue({ width: 2000, height: 2000 });
    render(<Alumni />);

    const imageElements = screen.getAllByRole('img');
    expect(imageElements).toHaveLength(18);
  });
});
