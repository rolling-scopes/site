import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { MerchTagsDropdown } from './merch-tags-dropdown';

describe('MerchTagsDropdown', () => {
  const handleClick = vi.fn();

  it('should render correctly in a close state', () => {
    render(<MerchTagsDropdown isOpen={false} onClick={handleClick} />);
    const button = screen.getByTestId('dropdown-button');

    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should render correctly in an open state', () => {
    render(<MerchTagsDropdown isOpen={true} onClick={handleClick} />);
    const button = screen.getByTestId('dropdown-button');

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should call the onClick handler when the button is clicked', () => {
    render(<MerchTagsDropdown isOpen={false} onClick={handleClick} />);
    const button = screen.getByTestId('dropdown-button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should contain a dropdown arrow icon and a button title', () => {
    render(<MerchTagsDropdown isOpen={false} onClick={() => {}} />);
    const arrowIcon = screen.getByTestId('dropdown-arrow');
    const dropdownTitle = screen.getByTestId('dropdown-title');

    expect(arrowIcon).toBeInTheDocument();
    expect(dropdownTitle).toBeInTheDocument();
  });
});
