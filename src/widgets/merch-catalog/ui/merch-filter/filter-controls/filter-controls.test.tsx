import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { FilterControls } from './filter-controls';
import { getMockedProps } from '@/shared/__tests__/constants';

vi.mock('../filter-controls/layouts/desktop-controls/desktop-controls', () => ({ DesktopFilterControls: () => <div data-testid="desktop-controls" /> }));
vi.mock('../filter-controls/layouts/mobile-controls/mobile-controls', () => ({ MobileFilterControls: () => <div data-testid="mobile-controls" /> }));

describe('FilterControls', () => {
  it('should render DesktopFilterControls when isTabletLayout is false', () => {
    const props = getMockedProps({ isTabletLayout: false });

    render(<FilterControls {...props} />);
    expect(screen.getByTestId('desktop-controls')).toBeInTheDocument();
    expect(screen.queryByTestId('mobile-controls')).not.toBeInTheDocument();
  });

  it('should render MobileFilterControls when isTabletLayout is true', () => {
    const props = getMockedProps({ isTabletLayout: true });

    render(<FilterControls {...props} />);
    expect(screen.getByTestId('mobile-controls')).toBeInTheDocument();
    expect(screen.queryByTestId('desktop-controls')).not.toBeInTheDocument();
  });
});
