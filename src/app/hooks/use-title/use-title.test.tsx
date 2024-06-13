import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useTitle } from './use-title';

describe('useTitle', () => {
  it('changes document title and reverts it back after unmount', () => {
    const originalTitle = 'Original Title';
    const newTitle = 'New Title';

    document.title = originalTitle;

    const { unmount } = renderHook(() => useTitle(newTitle));

    expect(document.title).toBe(newTitle);

    unmount();

    expect(document.title).toBe(originalTitle);
  });

  it('changes the title multiple times and always reverts to the original', () => {
    const originalTitle = 'Original Title';
    const newTitle = 'New Title';
    const anotherNewTitle = 'Another New Title';

    document.title = originalTitle;

    const { rerender, unmount } = renderHook((title) => useTitle(title), {
      initialProps: newTitle,
    });

    expect(document.title).toBe(newTitle);

    rerender(anotherNewTitle);

    expect(document.title).toBe(anotherNewTitle);

    unmount();

    expect(document.title).toBe(originalTitle);
  });
});
