import { describe, expect, it } from 'vitest';
import { getCourseDate } from './getCourseDate';
import { TO_BE_DETERMINED } from '@/shared/constants';

const staleAfterDays = 30;

describe('getCourseDate', () => {
  it('should return "TBD" if date is not valid', () => {
    const date = 'invalid-date';
    const result = getCourseDate(date, staleAfterDays);

    expect(result).toBe(TO_BE_DETERMINED);
  });

  it('should return "TBD" for empty date', () => {
    const date = '';
    const result = getCourseDate(date, staleAfterDays);

    expect(result).toBe(TO_BE_DETERMINED);
  });

  it('should return date if valid and non stale', () => {
    const date = '2060-01-01';
    const result = getCourseDate(date, staleAfterDays);

    expect(result).toBe(date);
  });
});
