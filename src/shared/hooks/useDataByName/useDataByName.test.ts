import { renderHook, waitFor } from '@testing-library/react';
import { useDataByName } from './useDataByName';
import { fetchDataByName } from '@/shared/services/api';
import { it, vi, describe, expect, type MockedFunction } from 'vitest';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

const courses = [
  {
    id: '1',
    title: 'AWS Fundamentals',
    iconSrc: MOCKED_IMAGE_PATH,
    startDate: 'Sept 18, 2023',
    language: ['en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/aws-fundamentals/',
    backgroundStyle: { backgroundColor: '#F4F1FA', accentColor: '#7356BF' }
  },
  {
    id: '2',
    title: 'React JS course',
    iconSrc: MOCKED_IMAGE_PATH,
    startDate: '23 Oct, 2023',
    language: ['ru', 'en'],
    mode: 'online',
    detailsUrl: 'https://rs.school/react/',
    backgroundStyle: { backgroundColor: '#EEF3FE', accentColor: '#7356BF' }
  }
];

vi.mock('@/shared/services/api', () => ({
  fetchDataByName: vi.fn()
}));

describe('useDataByName', () => {
  it('starts with the correct initial state', () => {
    const { result } = renderHook(() => useDataByName('courses'));

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe('');
  });

  it('fetches successfully data by name', async () => {
    const dataName = 'courses';
    (fetchDataByName as MockedFunction<typeof fetchDataByName>).mockResolvedValueOnce(courses);

    const { result } = renderHook(() => useDataByName(dataName));

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => result.current.loading === false);

    expect(result.current.data).toEqual(courses);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe('');
  });

  it('handles error', async () => {
    (fetchDataByName as MockedFunction<typeof fetchDataByName>).mockRejectedValueOnce(
      new Error('Fetch failed')
    );

    const { result } = renderHook(() => useDataByName('courses'));

    expect(result.current.loading).toBeTruthy();

    await waitFor(() => result.current.loading === false);

    expect(result.current.error).toBe('Fetch failed');
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeFalsy();
  });

  it('sets loading to false when there is no data to fetch', async () => {
    (fetchDataByName as MockedFunction<typeof fetchDataByName>).mockResolvedValueOnce([]);

    const { result } = renderHook(() => useDataByName('courses'));

    await waitFor(() => result.current.loading === false);

    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBe('');
  });

  it('handles error when there is no data for the provided key', async () => {
    const dataName = 'nonexistentKey';
    (fetchDataByName as MockedFunction<typeof fetchDataByName>).mockImplementationOnce(() => {
      throw new Error(`No data available for name: ${dataName}`);
    });

    const { result } = renderHook(() => useDataByName(dataName));

    await waitFor(() => result.current.loading === false);

    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBe(`No data available for name: ${dataName}`);
  });
});
