export type FilterControlsProps = {
  allAvailableTags: string[];
  searchTerm: string;
  selectedTags: string[];
  hasActiveFilters: boolean;
  onSearchChange: (newSearchTerm: string) => void;
  onTagChange: (tag: string) => void;
  onClearFilters: () => void;
};
