import { renderHook } from '@testing-library/react';
import { Mock, describe, expect, it, vi } from 'vitest';
import { useCourseByTitle } from './use-course-by-title';
import { useDataByName } from '../use-data-by-name';

vi.mock('../use-data-by-name', () => ({
  useDataByName: vi.fn(),
}));

describe('useCourseByTitle', () => {
  const mockData = [
    { id: 1, title: 'React JS course' },
    {
      id: 2,
      title: 'JavaScript / Front-end',
      alTitle: 'JavaScript / Front-end',
      type: 'Mentoring Program',
    },
  ];

  it('returns the course where title starts with provided string', () => {
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    const { result } = renderHook(() => useCourseByTitle('React'));

    expect(result.current.course).toEqual(mockData[0]);

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it('returns null as course and error message if no course title starts with provided string', () => {
    (useDataByName as Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error('No courses data available.'),
    });

    const { result } = renderHook(() => useCourseByTitle('AWS'));

    expect(result.current.course).toBeNull();
    expect(result.current.hasError).toBe(true);
    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('No courses data available.');
  });

  it('keeps the state of loading and error from useDataByName', () => {
    (useDataByName as Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    const { result } = renderHook(() => useCourseByTitle('AWS'));

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();
  });

  it('returns the course of the specific type when type is provided', () => {
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    const { result } = renderHook(() => useCourseByTitle('JavaScript'));

    expect(result.current.course).toEqual(mockData[1]);
  });

  it('returns null as course if no course matches provided type', () => {
    (useDataByName as Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    const { result } = renderHook(() => useCourseByTitle('React1'));

    expect(result.current.course).toBeUndefined();
    expect(result.current.hasError).toBe(true);
  });
});

it('handles fetch error from useDataByName', async () => {
  (useDataByName as Mock).mockReturnValue({
    data: null,
    loading: false,
    error: new Error('anything'),
  });

  const { result } = renderHook(() => useCourseByTitle('anything'));

  expect(result.current.course).toBeNull();
  expect(result.current.hasError).toBe(true);
  expect(result.current.error).toBeInstanceOf(Error);
  expect(result.current.error?.message).toBe('No courses data available.');
});
