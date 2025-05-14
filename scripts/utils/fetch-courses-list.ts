import type { ApiCourse } from '../types';

export async function fetchCoursesList(url: string): Promise<ApiCourse[]> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }
  return (await res.json()) as ApiCourse[];
}
