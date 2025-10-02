import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { DesktopFilterControls } from './desktop-controls';
import { getMockedProps } from '@/shared/__tests__/constants';

vi.mock('../../search-input/search-input', () => ({
  default: (props: { searchTerm: string }) => (
    <div data-testid="search-input">
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

  it('should always render the title, search input, and tag filters', () => {
    const props = getMockedProps();

    render(<DesktopFilterControls {...props} />);

    expect(screen.getByText('Filter merch')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
  });

  it('should pass the correct props down to child components', () => {
    const props = getMockedProps();

    props.searchTerm = 'hoodie';
    props.selectedTags = ['clothing'];

    render(<DesktopFilterControls {...props} />);

    expect(screen.getByTestId('search-input')).toHaveTextContent('Search Term:hoodie');
    expect(screen.getByTestId('tag-filters')).toHaveTextContent('Selected Tags:clothing');
  });

  it('should render the "Clear" button without the "active" class if filters are not active', () => {
    const props = getMockedProps();

    props.hasActiveFilters = false;

    render(<DesktopFilterControls {...props} />);

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).not.toHaveClass('active');
  });

  it('should render the "Clear" button with the "active" class if filters are active', () => {
    const props = getMockedProps();

    props.hasActiveFilters = true;

    render(<DesktopFilterControls {...props} />);

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();
    expect(clearButton).toHaveClass('active');
  });
});
