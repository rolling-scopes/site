import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { MerchTagsToggle } from './merch-tags-toggle';

describe('MerchTagsToggle', () => {
  it('should render correctly in a close state', () => {
    const handleClick = vi.fn();

    render(<MerchTagsToggle isOpen={false} onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /all filters/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should render correctly in an open state', () => {
    const handleClick = vi.fn();

    render(<MerchTagsToggle isOpen={true} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: /all filters/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('should call the onClick handler when the button is clicked', () => {
    const handleClick = vi.fn();

    render(<MerchTagsToggle isOpen={false} onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /all filters/i });

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should contain a dropdown arrow icon', () => {
    render(<MerchTagsToggle isOpen={false} onClick={() => {}} />);
    const arrowIcon = screen.getByLabelText('dropdown-arrow');

    expect(arrowIcon).toBeInTheDocument();
  });
});
