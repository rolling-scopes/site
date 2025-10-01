import { MerchProduct } from '@/entities/merch';

export type FilterControlsProps = {
  allAvailableTags: string[];
  searchTerm: string;
  selectedTags: string[];
  hasActiveFilters: boolean;
  onSearchChange: (newSearchTerm: string) => void;
  onTagChange: (tag: string) => void;
  onClearFilters: () => void;
  isTabletLayout?: boolean;
  areTagsExpandedTablet?: boolean;
  onToggleTagsExpansionTablet?: () => void;
};

export type FilteredMerchViewProps = {
  initialProducts: MerchProduct[];
  initialAvailableTags: string[];
};
