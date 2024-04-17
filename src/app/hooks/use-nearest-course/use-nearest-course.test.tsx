import { renderHook } from '@testing-library/react';
import { Mock, afterAll, describe, expect, it, vi } from 'vitest';
import { useNearestCourse } from './use-nearest-course';
import { useDataByName } from '../use-data-by-name';

const originalDateNow = Date.now;
const mockData = [
  {
    id: 1,
    title: 'React JS course',
    startDate: 'Apr 5, 2024',
  },
  {
    id: 2,
    title: 'JavaScript / Front-end',
    startDate: 'May 29, 2024',
  },
  {
    id: 3,
    title: 'Some course title',
    startDate: 'May 20, 2024',
  },
];

vi.mock('../use-data-by-name', () => ({
  useDataByName: vi.fn(),
}));

describe('useNearestCourse', () => {
  afterAll(() => {
    Date.now = originalDateNow;
  });

  it('returns the nearest course', () => {
    const bufferPeriod = 14;
    const date1 = Date.parse(mockData[0].startDate) + (bufferPeriod - 1) * 24 * 60 * 60 * 1000;
    const date2 = Date.parse(mockData[0].startDate) + bufferPeriod * 24 * 60 * 60 * 1000;

    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
    Date.now = vi.fn(() => date1);
    const { result: res1 } = renderHook(() => useNearestCourse(bufferPeriod));

    expect(res1.current.course).toEqual(mockData[0]);
    expect(res1.current.loading).toBeFalsy();
    expect(res1.current.error).toBeNull();

    Date.now = vi.fn(() => date2);
    const { result: res2 } = renderHook(() => useNearestCourse(bufferPeriod));

    expect(res2.current.course).toEqual(mockData[2]);
    expect(res2.current.loading).toBeFalsy();
    expect(res2.current.error).toBeNull();
  });

  it('always returns the next course', () => {
    const bufferPeriod = 0;
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
    Date.now = vi.fn(() => Date.parse(mockData[0].startDate) + 1);

    const { result } = renderHook(() => useNearestCourse(bufferPeriod));

    expect(result.current.course).toEqual(mockData[2]);

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('returns next course when there are no previous courses', () => {
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
    Date.now = vi.fn(() => Date.parse('Apr 1, 2024'));

    const { result } = renderHook(() => useNearestCourse());

    expect(result.current.course).toEqual(mockData[0]);

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('returns next course when there are no next courses', () => {
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
    Date.now = vi.fn(() => Date.parse('May 30, 2024'));

    const { result } = renderHook(() => useNearestCourse());

    expect(result.current.course).toEqual(mockData[1]);

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('returns null as course and error message if there are no courses available', () => {
    (useDataByName as Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('No courses data available.'),
    });

    const { result } = renderHook(() => useNearestCourse());

    expect(result.current.course).toBeNull();
    expect(result.current.hasError).toBe(true);
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('No courses data available.');
  });

  it('keeps the state of loading and error from useNearestCourse', () => {
    (useDataByName as Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const { result } = renderHook(() => useNearestCourse());

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();
  });
});
