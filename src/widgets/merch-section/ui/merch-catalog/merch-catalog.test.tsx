import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DesktopMerchFilters } from './layouts/desktop-merch-filters/desktop-merch-filters';
import { MobileMerchFilters } from './layouts/mobile-merch-filters/mobile-merch-filters';
import { MerchCatalog } from './merch-catalog';
import SearchFilters from './merch-filters/search-filters/search-filters';
import TagFilters from './merch-filters/tag-filters/tag-filters';
import { LayoutMobileProps, LayoutProps, MerchProductsProps } from './types';
import { MerchProduct } from '@/entities/merch';

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

const mockProducts: MerchProduct[] = [
  {
    id: 1,
    title: 'Cool T-Shirt',
    tags: ['clothing', 'unisex'],
    name: '',
    preview: [],
    download: [],
  },
  {
    id: 2,
    title: 'Awesome Mug',
    tags: ['kitchen', 'gift'],
    name: '',
    preview: [],
    download: [],
  },
  {
    id: 3,
    title: 'Another T-Shirt',
    tags: ['clothing', 'men'],
    name: '',
    preview: [],
    download: [],
  },
];
const mockTags = ['clothing', 'unisex', 'kitchen', 'gift', 'men'];
const defaultProps: MerchProductsProps = {
  initialProducts: mockProducts,
  initialAvailableTags: mockTags,
};

describe('MerchCatalog', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSearchParams = {};

    vi.mocked(DesktopMerchFilters).mockImplementation(
      ({ searchFilters, tagFilters }: LayoutProps) => (
        <div>
          {searchFilters}
          {tagFilters}
        </div>
      ),
    );

    vi.mocked(MobileMerchFilters).mockImplementation(
      ({ searchFilters, tagFilters }: LayoutMobileProps) => (
        <div>
          {searchFilters}
          {tagFilters}
        </div>
      ),
    );
  });

  it('toggles the expanded state for mobile filters when its callback is called', () => {
    render(<MerchCatalog {...defaultProps} />);

    let mobileFiltersProps = vi.mocked(MobileMerchFilters).mock.calls[0][0];

    expect(mobileFiltersProps.areTagsExpanded).toBe(false);

    act(() => {
      mobileFiltersProps.onToggleTagsExpansion();
    });

    mobileFiltersProps = vi.mocked(MobileMerchFilters).mock.calls[1][0];
    expect(mobileFiltersProps.areTagsExpanded).toBe(true);
  });

  describe('when rendering initial products without active filters', () => {
    beforeEach(() => {
      render(<MerchCatalog {...defaultProps} />);
    });

    const productTitles = ['Cool T-Shirt', 'Awesome Mug', 'Another T-Shirt'];

    it.each(productTitles)('should render the product: %s', (title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('filters products based on search term from URL', () => {
    mockSearchParams = { search: 'Mug' };
    render(<MerchCatalog {...defaultProps} />);
    expect(screen.queryByText('Cool T-Shirt')).not.toBeInTheDocument();
    expect(screen.getByText('Awesome Mug')).toBeInTheDocument();
  });

  it('filters products based on a single type from URL', () => {
    mockSearchParams = { types: ['kitchen'] };
    render(<MerchCatalog {...defaultProps} />);
    expect(screen.queryByText('Cool T-Shirt')).not.toBeInTheDocument();
    expect(screen.getByText('Awesome Mug')).toBeInTheDocument();
  });

  it('updates the URL when SearchFilters calls onSearchChange', () => {
    render(<MerchCatalog {...defaultProps} />);
    const searchFiltersProps = vi.mocked(SearchFilters).mock.calls[0][0];

    act(() => {
      searchFiltersProps.onSearchChange('Test');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?search=Test', { scroll: false });
  });

  it('updates the URL when TagFilters calls onTagChange to select a tag', () => {
    render(<MerchCatalog {...defaultProps} />);
    const tagFiltersProps = vi.mocked(TagFilters).mock.calls[0][0];

    act(() => {
      tagFiltersProps.onTagChange('clothing');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?type=clothing', { scroll: false });
  });

  it('removes a tag from the URL when TagFilters calls onTagChange to deselect it', () => {
    mockSearchParams = { types: ['clothing', 'unisex'] };
    render(<MerchCatalog {...defaultProps} />);
    const tagFiltersProps = vi.mocked(TagFilters).mock.calls[0][0];

    act(() => {
      tagFiltersProps.onTagChange('clothing');
    });
    expect(mockRouterReplace).toHaveBeenCalledTimes(1);
    expect(mockRouterReplace).toHaveBeenCalledExactlyOnceWith('/merch?type=unisex', { scroll: false });
  });

  it('shows "No merch found" when filters yield no results', () => {
    mockSearchParams = { search: 'impossible' };
    render(<MerchCatalog {...defaultProps} />);
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
    expect(screen.queryByTestId('merch-list')).not.toBeInTheDocument();
  });
});
