import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useWindowSize } from '.';

describe('useWindowSize', () => {
  let windowDimensions: { width: number; height: number };

  beforeEach(() => {
    windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  afterEach(() => {
    window.innerWidth = windowDimensions.width;
    window.innerHeight = windowDimensions.height;
  });

  it('should return window dimensions', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toEqual(window.innerWidth);
    expect(result.current.height).toEqual(window.innerHeight);

    act(() => {
      global.innerWidth = 500;
      global.innerHeight = 500;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toEqual(500);
    expect(result.current.height).toEqual(500);
  });

  it('should handle multiple resize events', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      global.innerWidth = 800;
      global.innerHeight = 600;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toEqual(800);
    expect(result.current.height).toEqual(600);

    act(() => {
      global.innerWidth = 1024;
      global.innerHeight = 768;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toEqual(1024);
    expect(result.current.height).toEqual(768);
  });

  it('should handle large to small resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      global.innerWidth = 1200;
      global.innerHeight = 800;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toEqual(1200);
    expect(result.current.height).toEqual(800);

    act(() => {
      global.innerWidth = 375;
      global.innerHeight = 667;
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toEqual(375);
    expect(result.current.height).toEqual(667);
  });
});
