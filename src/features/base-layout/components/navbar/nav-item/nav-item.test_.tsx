import { fireEvent, screen } from '@testing-library/react';
import { NavItem } from '../nav-item';
import { useWindowSize } from '@/app/hooks';
import { type Mock, afterEach, vi } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { act } from 'react-dom/test-utils';

vi.mock('@/app/hooks', async (importOriginal) => {
  const originalModule = await importOriginal<typeof import('@/app/hooks')>();

  return {
    ...originalModule,
    useWindowSize: vi.fn(),
    useOutsideClick: vi.fn(() => ({ current: null }))
  };
});

describe('NavItem', () => {
  let toggleMenu = vi.fn();
  const originalLocation = window.location;

  beforeEach(() => {
    delete (window as any).location;

    (window as any).location = {
      href: ''
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
    window.location = originalLocation;
  });

  it('renders correctly', async () => {
    (useWindowSize as Mock).mockReturnValue({ width: 1280 });

    const { debug } = await act(async () =>
      renderWithRouter(<NavItem label="Test" href="/test" />)
    );
    const linkElement = screen.getByText('Test');
    expect(linkElement).toBeInTheDocument();
    debug();
  });

  it('calls toggleMenu on click when window innerWidth is less than or equal to 810', async () => {
    (useWindowSize as Mock).mockReturnValue({ width: 800 });

    await act(async () => renderWithRouter(<NavItem label="Test" href="/test" dropdown />));

    const linkElement = screen.getByText('Test');
    fireEvent.click(linkElement);

    expect(toggleMenu).toHaveBeenCalled();
  });

  // it('does not call toggleMenu on click when window innerWidth is greater than 810', () => {
  //   (useWindowSize as Mock).mockReturnValue({ width: 1000 });

  //   renderWithRouter(<NavItem label="Test" href="/test" />);

  //   const linkElement = screen.getByText('Test');
  //   fireEvent.click(linkElement);

  //   expect(toggleMenu).not.toHaveBeenCalled();
  // });
});
