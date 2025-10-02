import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import TagFilters from './tag-filters';

describe('TagFilters', () => {
  const mockOnTagChange = vi.fn();
  const defaultProps = {
    allAvailableTags: ['clothing', 'mug', 'stickers'],
    selectedTags: [],
    onTagChange: mockOnTagChange,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when rendering tags', () => {
    beforeEach(() => {
      render(<TagFilters {...defaultProps} />);
    });
    it.each(defaultProps.allAvailableTags)('should render a checkbox for the "%s" tag', (tag) => {
      expect(screen.getByLabelText(tag)).toBeInTheDocument();
    });
  });

  it('should render nothing if allAvailableTags is empty', () => {
    const { container } = render(<TagFilters {...defaultProps} allAvailableTags={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should correctly mark checkboxes as checked based on the selectedTags prop', () => {
    render(<TagFilters {...defaultProps} selectedTags={['mug', 'stickers']} />);

    expect(screen.getByLabelText('mug')).toBeChecked();
    expect(screen.getByLabelText('stickers')).toBeChecked();

    expect(screen.getByLabelText('clothing')).not.toBeChecked();
  });

  it('should apply the "selected" class to the label of a selected tag', () => {
    render(<TagFilters {...defaultProps} selectedTags={['mug']} />);

    const mugLabel = screen.getByText('mug').closest('label');

    expect(mugLabel).toHaveClass('selected');

    const clothingLabel = screen.getByText('clothing').closest('label');

    expect(clothingLabel).not.toHaveClass('selected');
  });
});
