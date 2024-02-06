import { renderHook } from '@testing-library/react';
import { useCourseByTitle } from './use-course-by-title';
import { it, vi, expect, describe, Mock } from 'vitest';
import { useDataByName } from '../use-data-by-name';

vi.mock('../use-data-by-name', () => ({
  useDataByName: vi.fn().mockReturnValue({
    data: [
      { id: 1, title: 'React JS course' },
      { id: 2, title: 'JavaScript course ' }
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

  it('returns null as course if no course title starts with provided string', () => {
    (useDataByName as Mock).mockReturnValueOnce({});
    try {
      const { result } = renderHook(() => useCourseByTitle('AWS'));
      expect(result.current.course).toBeNull();
      expect(result.current.hasError).toBe(true);
      expect(result.current.error).toEqual(Error('Course with title starting AWS not found!'));
    } catch (error) {
      expect(error).toEqual(Error('No courses data available.'));
    }
  });

  it('keeps the state of loading and error from useDataByName', () => {
    const { result } = renderHook(() => useCourseByTitle('React'));
    expect(result.current.hasError).toBeFalsy();
    expect(result.current.loading).toBeFalsy();
  });
});
