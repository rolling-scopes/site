import { describe, expect, it } from 'vitest';

import { getTags } from './get-tags';
import {
  MOCKED_PRODUCTS,
  MOCKED_PRODUCTS_WITH_BLANK_TAGS,
  MOCKED_PRODUCTS_WITH_MISSING_TAGS,
} from '@/shared/__tests__/constants';

describe('getTags', () => {
  it('should extract, deduplicate, and sort all tags alphabetically', () => {
    const result = getTags(MOCKED_PRODUCTS);
    const expected = ['cups', 'hoodie', 'merch', 't-shirts'];

    expect(result).toEqual(expected);
  });

  it('should return an empty array when given an empty array of products', () => {
    const result = getTags([]);

    expect(result).toEqual([]);
  });

  it('should handle products with null, undefined, or empty tag arrays correctly', () => {
    const result = getTags(MOCKED_PRODUCTS_WITH_MISSING_TAGS);

    expect(result).toEqual([]);
  });

  it('should correctly filter out empty string tags', () => {
    const result = getTags(MOCKED_PRODUCTS_WITH_BLANK_TAGS);

    expect(result).toEqual(['hoodie', 'merch']);
  });
});
