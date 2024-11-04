import { waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollToHashElement } from './scroll-to-hash';
import { ROUTES } from '@/core/const';
import { renderWithRouter } from '@/shared/__tests__/utils';

const mockUsePathname = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('ScrollToHashElement', () => {
  const scrollIntoViewMock = vi.fn();
  const getElementByIdMock = vi.fn();

  beforeEach(() => {
    scrollIntoViewMock.mockClear();
    getElementByIdMock.mockClear();

    global.document.getElementById = getElementByIdMock.mockReturnValue({ scrollIntoView: scrollIntoViewMock });
  });

  const setup = (entry: string = ROUTES.HOME) => {
    mockUsePathname.mockImplementation(() => entry);
    renderWithRouter(<ScrollToHashElement />, { route: entry });
  };

  it('scrolls to an element matching the hash', async () => {
    setup('/#value');
    await waitFor(() => {
      expect(getElementByIdMock).toHaveBeenCalled();
      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  it("doesn't scroll when there is no target element", async () => {
    getElementByIdMock.mockReturnValueOnce(null);

    setup('/#missing');
    await waitFor(() => {
      expect(scrollIntoViewMock).not.toHaveBeenCalled();
    });
  });

  it("doesn't scroll when the URL doesn't contain a hash", async () => {
    getElementByIdMock.mockReturnValueOnce(null);

    setup();
    await waitFor(() => {
      expect(scrollIntoViewMock).not.toHaveBeenCalled();
    });
  });
});
