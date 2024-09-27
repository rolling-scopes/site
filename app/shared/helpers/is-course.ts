import type { Course } from '@/entities/course';

export function isCourse(obj: object): obj is Course {
  return (
    'title' in obj
    && 'iconSrc' in obj
    && 'startDate' in obj
    && 'detailsUrl' in obj
    && 'mode' in obj
    && 'language' in obj
    && 'backgroundStyle' in obj
  );
}
