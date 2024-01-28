import { renderHook } from '@testing-library/react';
import { useCourseByTitle } from './use-course-by-title';
import { it, vi, expect, describe } from 'vitest';

vi.mock('../use-data-by-name', () => ({
  useDataByName: vi.fn().mockReturnValue({
    data: [
      { id: 1, title: 'React JS course' },
      { id: 2, title: 'Angular course ' }
    ],
    loading: false,
    error: ''
  })
}));

describe('useCourseByTitle', () => {
  it('returns the course where title starts with provided string', () => {
    const { result } = renderHook(() => useCourseByTitle('React'));
    expect(result.current.course).toEqual({ id: 1, title: 'React JS course' });
  });

  it('returns undefined as course if no course title starts with provided string', () => {
    const { result } = renderHook(() => useCourseByTitle('AWS'));
    expect(result.current.course).toBeUndefined();
  });

  it('keeps the state of loading and error from useDataByName', () => {
    const { result } = renderHook(() => useCourseByTitle('React'));
    expect(result.current.error).toBe('');
    expect(result.current.loading).toBeFalsy();
  });
});
