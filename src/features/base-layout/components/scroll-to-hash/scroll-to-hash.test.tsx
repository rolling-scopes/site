import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollToHashElement } from './scroll-to-hash';
import { ROUTES } from '@/app/const';

describe('ScrollToHashElement', () => {
  const scrollIntoViewMock = vi.fn();
  const getElementByIdMock = vi.fn();
  beforeEach(() => {
    scrollIntoViewMock.mockClear();
    getElementByIdMock.mockClear();

    global.document.getElementById = getElementByIdMock.mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    } as unknown as HTMLElement);
  });

  const setup = (entry: string = ROUTES.HOME) => {
    render(
      <MemoryRouter initialEntries={[entry]}>
        <ScrollToHashElement />
      </MemoryRouter>,
    );
  };

  it('scrolls to an element matching the hash', async () => {
    setup('/#value');
    await waitFor(() => {
      expect(getElementByIdMock).toHaveBeenCalled();
      expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
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
