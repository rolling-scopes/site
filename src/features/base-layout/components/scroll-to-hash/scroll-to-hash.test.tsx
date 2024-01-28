import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { ScrollToHashElement } from '.';

describe('ScrollToHashElement', () => {
  let scrollIntoViewMock = vi.fn();
  let getElementByIdMock = vi.fn();
  beforeEach(() => {
    scrollIntoViewMock.mockClear();
    getElementByIdMock.mockClear();

    global.document.getElementById = getElementByIdMock.mockReturnValue({
      scrollIntoView: scrollIntoViewMock
    } as unknown as HTMLElement);
  });

  const setup = (entry = '/') => {
    return render(
      <MemoryRouter initialEntries={[entry]}>
        <ScrollToHashElement />
      </MemoryRouter>
    );
  };

  it('scrolls to an element matching the hash', () => {
    getElementByIdMock.mockReturnValueOnce({
      scrollIntoView: scrollIntoViewMock
    } as unknown as HTMLElement);

    setup('/#value');
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("doesn't scroll when there is no target element", () => {
    getElementByIdMock.mockReturnValueOnce(null);

    setup('/#missing');
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });

  it("doesn't scroll when the URL doesn't contain a hash", () => {
    getElementByIdMock.mockReturnValueOnce(null);

    setup();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
