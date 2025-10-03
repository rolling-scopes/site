import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FilteredMerchView } from './filtered-catalog';
import { MerchProduct } from '@/entities/merch/types';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';

vi.mock('@/shared/hooks/use-media-query/use-media-query');

const mockRouterReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockRouterReplace }),
  usePathname: () => '/merch',
  useSearchParams: () => new URLSearchParams(mockUrlParams),
}));

let mockUrlParams = '';

const mockInitialProducts: MerchProduct[] = [
  {
    id: 1,
    title: 'Alpha T-Shirt',
    tags: ['clothing', 'tee'],
    name: '',
    preview: [],
    download: [],
  },
  {
    id: 2,
    title: 'Beta Coffee Mug',
    tags: ['accessories', 'mug'],
    name: '',
    preview: [],
    download: [],
  },
  {
    id: 3,
    title: 'Delta Graphic Tee',
    tags: ['clothing', 'tee', 'new'],
    name: '',
    preview: [],
    download: [],
  },
];

const mockAvailableTags = ['clothing', 'tee', 'accessories', 'mug', 'new'];

describe('FilteredMerchView', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUrlParams = '';
    vi.mocked(useMediaQuery).mockReturnValue(false);
  });

  describe('Initial Rendering from URL', () => {
    it('should display the search term from the URL in the input field', () => {
      mockUrlParams = 'search=Alpha';
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );

      const searchInput = screen.getByPlaceholderText(/Search.../i);

      expect(searchInput).toHaveValue('Alpha');
    });

    it('should render only the products that match the search term from the URL', () => {
      mockUrlParams = 'search=Alpha';
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );

      expect(screen.getByText('Alpha T-Shirt')).toBeInTheDocument();
      expect(screen.queryByText('Beta Coffee Mug')).not.toBeInTheDocument();
    });

    it('should correctly check the tags that are present in the URL', () => {
      mockUrlParams = 'type=mug';
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );

      const mugCheckbox = screen.getByLabelText('mug');

      expect(mugCheckbox).toBeChecked();
    });
  });

  describe('User interaction and URL updates', () => {
    it('should call router.replace with the new search term when user types', () => {
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );

      const searchInput = screen.getByPlaceholderText(/Search.../i);

      fireEvent.change(searchInput, { target: { value: 'Beta' } });

      expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?search=Beta', { scroll: false });
    });

    it('should call router.replace with the selected tag when a checkbox is clicked', () => {
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );

      const clothingCheckbox = screen.getByLabelText('clothing');

      fireEvent.click(clothingCheckbox);

      expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?type=clothing', { scroll: false });
    });

    it('should call router.replace with an empty query when "Clear" is clicked', () => {
      mockUrlParams = 'search=Alpha&type=clothing';
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );
      const clearButton = screen.getByRole('button', { name: /clear/i });

      fireEvent.click(clearButton);
      expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch', { scroll: false });
    });
  });

  describe('Empty State Rendering', () => {
    it('should render "No merchandise available" message when initialProducts is empty', () => {
      render(<FilteredMerchView initialProducts={[]} initialAvailableTags={[]} />);
      expect(screen.getByText('No merchandise available at this time.')).toBeInTheDocument();
    });

    it('should render "try another filter" message when filters yield no results', () => {
      mockUrlParams = 'search=nonexistent';
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={mockAvailableTags}
        />,
      );
      expect(screen.getByText(/no merch found. please try another filter/i)).toBeInTheDocument();
    });
  });
});
