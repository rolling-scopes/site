import { ReactNode } from 'react';

import { MerchProduct } from '@/entities/merch';

export type MerchCatalogProps = {
  allAvailableTags: string[];
  searchTerm: string;
  selectedTags: string[];
  hasActiveFilters: boolean;
  onSearchChange: (newSearchTerm: string) => void;
  onTagChange: (tag: string) => void;
  onClearFilters: () => void;
  areTagsExpanded?: boolean;
  onToggleTagsExpansion?: () => void;
};

export type LayoutProps = {
  hasActiveFilters: boolean;
  onClearFilters: () => void;
  searchFilters: ReactNode;
  tagFilters: ReactNode;
};

export type LayoutMobileProps = LayoutProps & {
  areTagsExpanded: boolean;
  onToggleTagsExpansion: () => void;
};

export type MerchProductsProps = {
  initialProducts: MerchProduct[];
  initialAvailableTags: string[];
};
