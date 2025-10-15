import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MerchCatalog } from './merch-catalog';
import { MerchFilter } from './merch-filter/merch-filter';
import SearchFilters from './merch-filter/merch-search/merch-search';
import TagFilters from './merch-filter/merch-tags/merch-tags';
import { MerchFilterProps, MerchProductsProps } from './types';
import { MerchProduct } from '@/entities/merch';
import { MOCKED_PRODUCTS } from '@/shared/__tests__/constants';

const mockRouterReplace = vi.fn();
let mockSearchParams: { search?: string;
  types?: string[]; } = {};

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockRouterReplace }),
  usePathname: () => '/merch',
  useSearchParams: () => ({
    get: (key: string) => (key === 'search' ? mockSearchParams.search || '' : ''),
    getAll: (key: string) => (key === 'type' ? mockSearchParams.types || [] : []),
  }),
}));

vi.mock('@/shared/ui/paragraph', () => ({ Paragraph: ({ children }: { children: React.ReactNode }) => <p>{children}</p> }));
vi.mock('./merch-list/merch-list', () => ({
  MerchList: ({ products }: { products: MerchProduct[] }) => (
    <div data-testid="merch-list">
      {products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  ),
}));

vi.mock('./merch-filters/search-filters/search-filters', () => ({ default: vi.fn() }));
vi.mock('./merch-filters/tag-filters/tag-filters', () => ({ default: vi.fn() }));
vi.mock('./layouts/desktop-merch-filters/desktop-merch-filters', () => ({ DesktopMerchFilters: vi.fn() }));
vi.mock('./layouts/mobile-merch-filters/mobile-merch-filters', () => ({ MobileMerchFilters: vi.fn() }));

const defaultProps: MerchProductsProps = { initialProducts: MOCKED_PRODUCTS };

describe('MerchCatalog', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSearchParams = {};

    vi.mocked(MerchFilter).mockImplementation(({ searchFilters, tagFilters }: MerchFilterProps) => (
      <div>
        {searchFilters}
        {tagFilters}
      </div>
    ));
  });

  describe('when rendering initial products without active filters', () => {
    beforeEach(() => {
      render(<MerchCatalog {...defaultProps} />);
    });

    const productTitles = ['Cool T-Shirt', 'Awesome Mug', 'Another T-Shirt'];

    it.skip.each(productTitles)('should render the product: %s', (title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it.skip('filters products based on search term from URL', () => {
    mockSearchParams = { search: 'Mug' };
    render(<MerchCatalog {...defaultProps} />);
    expect(screen.queryByText('Cool T-Shirt')).not.toBeInTheDocument();
    expect(screen.getByText('Awesome Mug')).toBeInTheDocument();
  });

  it.skip('filters products based on a single type from URL', () => {
    mockSearchParams = { types: ['kitchen'] };
    render(<MerchCatalog {...defaultProps} />);
    expect(screen.queryByText('Cool T-Shirt')).not.toBeInTheDocument();
    expect(screen.getByText('Awesome Mug')).toBeInTheDocument();
  });

  it.skip('updates the URL when SearchFilters calls onSearchChange', () => {
    render(<MerchCatalog {...defaultProps} />);
    const searchFiltersProps = vi.mocked(SearchFilters).mock.calls[0][0];

    act(() => {
      searchFiltersProps.onSearchChange('Test');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?search=Test', { scroll: false });
  });

  it.skip('updates the URL when TagFilters calls onTagChange to select a tag', () => {
    render(<MerchCatalog {...defaultProps} />);
    const tagFiltersProps = vi.mocked(TagFilters).mock.calls[0][0];

    act(() => {
      tagFiltersProps.onTagChange('clothing');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?type=clothing', { scroll: false });
  });

  it.skip('removes a tag from the URL when TagFilters calls onTagChange to deselect it', () => {
    mockSearchParams = { types: ['clothing', 'unisex'] };
    render(<MerchCatalog {...defaultProps} />);
    const tagFiltersProps = vi.mocked(TagFilters).mock.calls[0][0];

    act(() => {
      tagFiltersProps.onTagChange('clothing');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?type=unisex', { scroll: false });
  });

  it.skip('shows "No merch found" when filters yield no results', () => {
    mockSearchParams = { search: 'impossible' };
    render(<MerchCatalog {...defaultProps} />);
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
    expect(screen.queryByTestId('merch-list')).not.toBeInTheDocument();
  });
});
