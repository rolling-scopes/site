import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DesktopMerchFilters } from './desktop-merch-filters';
import { getMockedProps } from '@/shared/__tests__/constants';

vi.mock('../../search-filters/search-filters', () => ({
  default: (props: { searchTerm: string }) => (
    <div data-testid="search-filters">
      Search Term:
      {props.searchTerm}
    </div>
  ),
}));

vi.mock('../../tag-filters/tag-filters', () => ({
  default: (props: { selectedTags: string[] }) => (
    <div data-testid="tag-filters">
      Selected Tags:
      {props.selectedTags.join(',')}
    </div>
  ),
}));

vi.mock('@/shared/ui/subtitle', () => ({ Subtitle: (props: { children: React.ReactNode }) => <div>{props.children}</div> }));

describe('DesktopFilterControls', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it.skip('should always render the title, search input, and tag filters', () => {
    const props = getMockedProps();

    render(<DesktopMerchFilters searchFilters={undefined} tagFilters={undefined} {...props} />);

    expect(screen.getByText('Filter merch')).toBeInTheDocument();
    expect(screen.getByTestId('search-filters')).toBeInTheDocument();
    expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
  });

  it.skip('should pass the correct props down to child components', () => {
    const props = getMockedProps();

    props.searchTerm = 'hoodie';
    props.selectedTags = ['clothing'];

    render(<DesktopMerchFilters searchFilters={undefined} tagFilters={undefined} {...props} />);

    expect(screen.getByTestId('search-filters')).toHaveTextContent('Search Term:hoodie');
    expect(screen.getByTestId('tag-filters')).toHaveTextContent('Selected Tags:clothing');
  });

  it.skip('should render the "Clear" button without the "active" class if filters are not active', () => {
    const props = getMockedProps();

    props.hasActiveFilters = false;

    render(<DesktopMerchFilters searchFilters={undefined} tagFilters={undefined} {...props} />);

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).not.toHaveClass('active');
  });

  it.skip('should render the "Clear" button with the "active" class if filters are active', () => {
    const props = getMockedProps();

    props.hasActiveFilters = true;

    render(<DesktopMerchFilters searchFilters={undefined} tagFilters={undefined} {...props} />);

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveClass('active');
  });
});
