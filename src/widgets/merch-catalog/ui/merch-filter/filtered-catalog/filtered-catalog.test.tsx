import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FilteredMerchView } from './filtered-catalog';
import { FilterControls } from '../filter-controls/filter-controls';
import { MerchProduct } from '@/entities/merch/types';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';

vi.mock('../filter-controls/filter-controls', () => ({
  FilterControls: vi.fn((props) => (
    <div data-testid="filter-controls">
      <button onClick={() => props.onSearchChange('search test')}>MockSearch</button>
      <button onClick={() => props.onTagChange('tag1')}>MockTag1</button>
      <button onClick={() => props.onTagChange('tag2')}>MockTag2</button>
      <button onClick={props.onClearFilters}>MockClear</button>
      <button onClick={props.onToggleTagsExpansionMobile}>MockToggleTags</button>
      <span>{`MobileLayout: ${props.isMobileLayout}`}</span>
      <span>{`TagsExpanded: ${props.areTagsExpandedMobile}`}</span>
      <span>{`SearchTerm: ${props.searchTerm}`}</span>
      <span>{`SelectedTags: ${props.selectedTags.join(',')}`}</span>
      <span>{`AllAvailableTags: ${props.allAvailableTags.join(',')}`}</span>
      <span>{`HasActiveFilters: ${props.hasActiveFilters}`}</span>
    </div>
  )),
}));

vi.mock('../../merch-list/merch-list', () => ({
  MerchList: vi.fn(({ products }) => (
    <div data-testid="merch-list">
      {products.map((p: MerchProduct) => (
        <div key={p.id} data-testid="merch-item">
          {p.title}
        </div>
      ))}
      <span>{`Rendered products: ${products.length}`}</span>
    </div>
  )),
}));

vi.mock('@/shared/hooks/use-media-query/use-media-query');

const mockInitialProducts: MerchProduct[] = [
  {
    id: '1',
    name: 'Tee Alpha',
    title: 'Alpha T-Shirt',
    preview: [],
    download: [],
    tags: ['clothing', 'tee'],
  },
  {
    id: '2',
    name: 'Mug Beta',
    title: 'Beta Coffee Mug',
    preview: [],
    download: [],
    tags: ['accessories', 'mug'],
  },
  {
    id: '3',
    name: 'Sticker Gamma',
    title: 'Gamma Sticker Pack',
    preview: [],
    download: [],
    tags: ['accessories', 'stickers'],
  },
  {
    id: '4',
    name: 'Tee Delta',
    title: 'Delta Graphic Tee',
    preview: [],
    download: [],
    tags: ['clothing', 'tee', 'new'],
  },
];

describe('FilteredMerchView', () => {
  const mockUseMediaQuery = useMediaQuery as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseMediaQuery.mockReturnValue(false);
  });

  it('renders initial products and filter controls', () => {
    render(<FilteredMerchView initialProducts={mockInitialProducts} />);
    expect(screen.getByTestId('filter-controls')).toBeInTheDocument();
    expect(screen.getByTestId('merch-list')).toBeInTheDocument();
    expect(screen.getByText('Rendered products: 4')).toBeInTheDocument();
    expect(
      screen.getByText('AllAvailableTags: accessories,clothing,mug,new,stickers,tee'),
    ).toBeInTheDocument();
  });

  it('filters products when searchTerm changes', () => {
    const { rerender } = render(<FilteredMerchView initialProducts={mockInitialProducts} />);

    const filterControlsProps = vi.mocked(FilterControls).mock.calls[0][0];

    act(() => {
      filterControlsProps.onSearchChange('Alpha');
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);

    expect(screen.getByText('Rendered products: 1')).toBeInTheDocument();
    expect(screen.getByText('Alpha T-Shirt')).toBeInTheDocument();
    expect(screen.queryByText('Beta Coffee Mug')).not.toBeInTheDocument();
  });

  it('filters products by selected tags', () => {
    const { rerender } = render(<FilteredMerchView initialProducts={mockInitialProducts} />);
    const filterControlsProps = vi.mocked(FilterControls).mock.calls[0][0];

    act(() => {
      filterControlsProps.onTagChange('mug');
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
    expect(screen.getByText('Rendered products: 1')).toBeInTheDocument();
    expect(screen.getByText('Beta Coffee Mug')).toBeInTheDocument();

    act(() => {
      filterControlsProps.onTagChange('stickers');
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
    expect(screen.getByText('Rendered products: 2')).toBeInTheDocument();
    expect(screen.getByText('Beta Coffee Mug')).toBeInTheDocument();
    expect(screen.getByText('Gamma Sticker Pack')).toBeInTheDocument();

    act(() => {
      filterControlsProps.onTagChange('mug');
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
    expect(screen.getByText('Rendered products: 1')).toBeInTheDocument();
    expect(screen.getByText('Gamma Sticker Pack')).toBeInTheDocument();
    expect(screen.queryByText('Beta Coffee Mug')).not.toBeInTheDocument();
  });

  it('clears filters when onClearFilters is called', () => {
    const { rerender } = render(<FilteredMerchView initialProducts={mockInitialProducts} />);
    const filterControlsPropsInitial = vi.mocked(FilterControls).mock.calls[0][0];

    act(() => {
      filterControlsPropsInitial.onSearchChange('Alpha');
      filterControlsPropsInitial.onTagChange('tee');
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
    expect(screen.getByText('Rendered products: 1')).toBeInTheDocument();
    expect(screen.getByText('Alpha T-Shirt')).toBeInTheDocument();

    const filterControlsPropsAfterFilter =
      vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];

    act(() => {
      filterControlsPropsAfterFilter.onClearFilters();
    });
    rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);

    expect(screen.getByText('Rendered products: 4')).toBeInTheDocument();
    const finalFilterControlsProps =
      vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];

    expect(finalFilterControlsProps.searchTerm).toBe('');
    expect(finalFilterControlsProps.selectedTags).toEqual([]);
    expect(finalFilterControlsProps.hasActiveFilters).toBe(false);
  });

  describe('Mobile Layout', () => {
    beforeEach(() => {
      mockUseMediaQuery.mockReturnValue(true);
    });

    it('passes isMobileLayout=true to FilterControls', () => {
      render(<FilteredMerchView initialProducts={mockInitialProducts} />);
      expect(screen.getByText('MobileLayout: true')).toBeInTheDocument();
    });

    it('toggles areTagsExpandedMobile for FilterControls', () => {
      const { rerender } = render(<FilteredMerchView initialProducts={mockInitialProducts} />);
      let filterControlsProps = vi.mocked(FilterControls).mock.calls[0][0];

      expect(filterControlsProps.areTagsExpandedMobile).toBe(false);

      act(() => {
        filterControlsProps.onToggleTagsExpansionMobile!();
      });
      rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
      filterControlsProps =
        vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];
      expect(filterControlsProps.areTagsExpandedMobile).toBe(true);

      act(() => {
        filterControlsProps.onToggleTagsExpansionMobile!();
      });
      rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
      filterControlsProps =
        vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];
      expect(filterControlsProps.areTagsExpandedMobile).toBe(false);
    });

    it('resets areMobileFiltersExpanded when switching to desktop layout', () => {
      mockUseMediaQuery.mockReturnValue(true);
      const { rerender } = render(<FilteredMerchView initialProducts={mockInitialProducts} />);
      let filterControlsProps = vi.mocked(FilterControls).mock.calls[0][0];

      act(() => {
        filterControlsProps.onToggleTagsExpansionMobile!();
      });
      rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
      filterControlsProps =
        vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];
      expect(filterControlsProps.areTagsExpandedMobile).toBe(true);

      mockUseMediaQuery.mockReturnValue(false);
      act(() => {
        rerender(<FilteredMerchView initialProducts={mockInitialProducts} />);
      });
      filterControlsProps =
        vi.mocked(FilterControls).mock.calls[vi.mocked(FilterControls).mock.calls.length - 1][0];
      expect(filterControlsProps.areTagsExpandedMobile).toBe(false);
    });
  });

  it('shows "no results" message when filters match no products', () => {
    render(<FilteredMerchView initialProducts={mockInitialProducts} />);
    const filterControlsProps = vi.mocked(FilterControls).mock.calls[0][0];

    act(() => {
      filterControlsProps.onSearchChange('nonExistentSearchTerm123');
    });
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
  });

  it('shows "no products" message when initialProducts is empty and no filters active', () => {
    render(<FilteredMerchView initialProducts={[]} />);
    expect(screen.getByText('No merch found')).toBeInTheDocument();
  });
});
