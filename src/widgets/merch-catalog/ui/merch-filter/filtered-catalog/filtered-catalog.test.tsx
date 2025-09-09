import { act, render, screen } from '@testing-library/react';
import {
  type MockedFunction,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { FilteredMerchView } from './filtered-catalog';
import { FilterControls as RealFilterControlsComponent } from '../filter-controls/filter-controls';
import { MerchProduct } from '@/entities/merch/types';
import { useMediaQuery } from '@/shared/hooks/use-media-query/use-media-query';

const mockRouterReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockRouterReplace,
    push: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/merch',
  useSearchParams: () => ({
    get: vi.fn((param: string) => {
      if (param === 'search') {
        return '';
      }
      if (param === 'type') {
        return null;
      }
      return null;
    }),
    getAll: vi.fn((param: string) => {
      if (param === 'type') {
        return [];
      }
      return [];
    }),
    toString: vi.fn(() => ''),
  }),
}));

type ActualFilterControlsProps = React.ComponentProps<typeof RealFilterControlsComponent>;

vi.mock('../filter-controls/filter-controls', () => ({ FilterControls: vi.fn() }));

vi.mock('../../merch-list/merch-list', () => ({
  MerchList: vi.fn(({ products }: { products: MerchProduct[] }) => (
    <div data-testid="merch-list">
      {products.map((p: MerchProduct) => (
        <div key={p.id} data-testid={`merch-item-${p.id}`}>
          {p.title}
        </div>
      ))}
      <span data-testid="rendered-products-count">{`Rendered products: ${products.length}`}</span>
    </div>
  )),
}));

vi.mock('@/shared/hooks/use-media-query/use-media-query', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('@/shared/hooks/use-media-query/use-media-query')>();

  return {
    ...actual,
    useMediaQuery: vi.fn(),
  };
});

const mockInitialProducts: MerchProduct[] = [
  {
    id: 1,
    name: 'Tee Alpha',
    title: 'Alpha T-Shirt',
    preview: [],
    download: [],
    tags: ['clothing', 'tee'],
  },
  {
    id: 2,
    name: 'Mug Beta',
    title: 'Beta Coffee Mug',
    preview: [],
    download: [],
    tags: ['accessories', 'mug'],
  },
  {
    id: 3,
    name: 'Sticker Gamma',
    title: 'Gamma Sticker Pack',
    preview: [],
    download: [],
    tags: ['accessories', 'stickers'],
  },
  {
    id: 4,
    name: 'Tee Delta',
    title: 'Delta Graphic Tee',
    preview: [],
    download: [],
    tags: ['clothing', 'tee', 'new'],
  },
];

const expectedUniqueTags = Array.from(
  new Set(mockInitialProducts.flatMap((product) => product.tags || []).filter((tag) => tag)),
).sort();

describe('FilteredMerchView', () => {
  const mockedUseMediaQueryHook = useMediaQuery as MockedFunction<typeof useMediaQuery>;
  let capturedFilterControlsProps: ActualFilterControlsProps;

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseMediaQueryHook.mockReturnValue(false);

    const TypedFilterControlsMock = RealFilterControlsComponent as MockedFunction<
      typeof RealFilterControlsComponent
    >;

    TypedFilterControlsMock.mockImplementation((props: ActualFilterControlsProps) => {
      capturedFilterControlsProps = props;
      return (
        <div data-testid="filter-controls">
          <span>{`SearchTermMock: ${props.searchTerm}`}</span>
          <span>{`SelectedTypesMock: ${props.selectedTags?.join(',') ?? ''}`}</span>
          <span>{`AllAvailableTagsMock: ${props.allAvailableTags?.join(',') ?? ''}`}</span>
          <span>{`HasActiveFiltersMock: ${props.hasActiveFilters}`}</span>
          <span>{`IsTabletLayoutMock: ${props.isTabletLayout}`}</span>
          <span>{`AreTagsExpandedTabletMock: ${props.areTagsExpandedTablet}`}</span>
        </div>
      );
    });
  });

  it('renders initial products and filter controls, and computes allAvailableTags from prop', () => {
    render(
      <FilteredMerchView
        initialProducts={mockInitialProducts}
        initialAvailableTags={expectedUniqueTags}
      />,
    );
    expect(screen.getByTestId('filter-controls')).toBeInTheDocument();
    expect(screen.getByTestId('merch-list')).toBeInTheDocument();
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 4');
    expect(capturedFilterControlsProps.allAvailableTags.sort()).toEqual(expectedUniqueTags.sort());
  });

  it('filters products when searchTerm changes', () => {
    render(
      <FilteredMerchView
        initialProducts={mockInitialProducts}
        initialAvailableTags={expectedUniqueTags}
      />,
    );
    act(() => {
      capturedFilterControlsProps.onSearchChange('Alpha');
    });
    expect(capturedFilterControlsProps.searchTerm).toBe('Alpha');
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 1');
    expect(screen.getByTestId('merch-item-1')).toHaveTextContent('Alpha T-Shirt');
    expect(screen.queryByTestId('merch-item-2')).not.toBeInTheDocument();
  });

  it('filters products by selected types (OR logic)', () => {
    render(
      <FilteredMerchView
        initialProducts={mockInitialProducts}
        initialAvailableTags={expectedUniqueTags}
      />,
    );
    act(() => {
      capturedFilterControlsProps.onTagChange('mug');
    });
    expect(capturedFilterControlsProps.selectedTags).toEqual(['mug']);
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 1');
    expect(screen.getByTestId('merch-item-2')).toHaveTextContent('Beta Coffee Mug');
    act(() => {
      capturedFilterControlsProps.onTagChange('stickers');
    });
    expect(capturedFilterControlsProps.selectedTags).toEqual(['mug', 'stickers']);
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 2');
    expect(screen.getByTestId('merch-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('merch-item-3')).toBeInTheDocument();
    act(() => {
      capturedFilterControlsProps.onTagChange('mug');
    });
    expect(capturedFilterControlsProps.selectedTags).toEqual(['stickers']);
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 1');
    expect(screen.getByTestId('merch-item-3')).toBeInTheDocument();
    expect(screen.queryByTestId('merch-item-2')).not.toBeInTheDocument();
  });

  it('clears filters when onClearFilters is called', () => {
    render(
      <FilteredMerchView
        initialProducts={mockInitialProducts}
        initialAvailableTags={expectedUniqueTags}
      />,
    );
    act(() => {
      capturedFilterControlsProps.onSearchChange('Alpha');
      capturedFilterControlsProps.onTagChange('tee');
    });
    expect(capturedFilterControlsProps.searchTerm).toBe('Alpha');
    expect(capturedFilterControlsProps.selectedTags).toEqual(['tee']);
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 1');
    act(() => {
      capturedFilterControlsProps.onClearFilters();
    });
    expect(capturedFilterControlsProps.searchTerm).toBe('');
    expect(capturedFilterControlsProps.selectedTags).toEqual([]);
    expect(capturedFilterControlsProps.hasActiveFilters).toBe(false);
    expect(screen.getByTestId('rendered-products-count')).toHaveTextContent('Rendered products: 4');
  });

  describe('Tablet Layout Interactions', () => {
    beforeEach(() => {
      vi.clearAllMocks();
      mockedUseMediaQueryHook.mockReturnValue(false);
    });

    it('passes isTabletLayout based on useMediaQuery hook', () => {
      mockedUseMediaQueryHook.mockReturnValue(true);
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={expectedUniqueTags}
        />,
      );
      expect(capturedFilterControlsProps.isTabletLayout).toBe(true);

      mockedUseMediaQueryHook.mockReturnValue(false);
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={expectedUniqueTags}
        />,
      );
      expect(capturedFilterControlsProps.isTabletLayout).toBe(false);
    });

    it('toggles areTagsExpandedTablet for FilterControls via onToggleTagsExpansionTablet', () => {
      mockedUseMediaQueryHook.mockReturnValue(true);
      render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={expectedUniqueTags}
        />,
      );
      expect(capturedFilterControlsProps.isTabletLayout).toBe(true);
      expect(capturedFilterControlsProps.areTagsExpandedTablet).toBe(false);
      act(() => {
        capturedFilterControlsProps.onToggleTagsExpansionTablet!();
      });
      expect(capturedFilterControlsProps.areTagsExpandedTablet).toBe(true);
      act(() => {
        capturedFilterControlsProps.onToggleTagsExpansionTablet!();
      });
      expect(capturedFilterControlsProps.areTagsExpandedTablet).toBe(false);
    });

    it('resets areTabletFiltersExpanded when switching to desktop layout', () => {
      mockedUseMediaQueryHook.mockReturnValue(true);
      const { rerender } = render(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={expectedUniqueTags}
        />,
      );

      act(() => {
        capturedFilterControlsProps.onToggleTagsExpansionTablet!();
      });
      expect(capturedFilterControlsProps.areTagsExpandedTablet).toBe(true);
      expect(capturedFilterControlsProps.isTabletLayout).toBe(true);

      mockedUseMediaQueryHook.mockReturnValue(false);
      rerender(
        <FilteredMerchView
          initialProducts={mockInitialProducts}
          initialAvailableTags={expectedUniqueTags}
        />,
      );
      expect(capturedFilterControlsProps.isTabletLayout).toBe(false);
      expect(capturedFilterControlsProps.areTagsExpandedTablet).toBe(false);
    });
  });

  it('shows "no results" message when filters match no products', () => {
    render(
      <FilteredMerchView
        initialProducts={mockInitialProducts}
        initialAvailableTags={expectedUniqueTags}
      />,
    );
    act(() => {
      capturedFilterControlsProps.onSearchChange('nonExistentSearchTerm123');
    });
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
  });

  it('shows "no products" message when initialProducts is empty and no filters active', () => {
    render(<FilteredMerchView initialProducts={[]} initialAvailableTags={[]} />);
    expect(screen.getByText('No merch found')).toBeInTheDocument();
    expect(capturedFilterControlsProps.hasActiveFilters).toBe(false);
  });
});
