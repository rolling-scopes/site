import { describe, expect, it } from 'vitest';

import { filterBySearchTerm, filterByTypes } from './filter-merch';
import {
  MOCKED_PRODUCTS,
  MOCKED_PRODUCTS_WITH_BLANK_TAGS,
  MOCKED_PRODUCTS_WITH_MISSING_TAGS,
} from '@/shared/__tests__/constants';

describe('filterBySearchTerm', () => {
  it('should return all products if the search term is empty', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS, '');

    expect(result).toEqual(MOCKED_PRODUCTS);
    expect(result.length).toBe(3);
  });

  it('should return an empty array if product list is empty', () => {
    const result = filterBySearchTerm([], 'hoodie');

    expect(result).toEqual([]);
  });

  it('should return an empty array if no product matches', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS, 'nonexistent');

    expect(result).toEqual([]);
  });

  it('should filter by title', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS, 'mug');

    expect(result).toEqual([MOCKED_PRODUCTS[1]]);
    const resultUpper = filterBySearchTerm(MOCKED_PRODUCTS, 'mug');

    expect(resultUpper).toEqual([MOCKED_PRODUCTS[1]]);
  });

  it('should filter by tag', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS, 'cups');

    expect(result).toEqual([MOCKED_PRODUCTS[1]]);
    const resultUpper = filterBySearchTerm(MOCKED_PRODUCTS, 'cups');

    expect(resultUpper).toEqual([MOCKED_PRODUCTS[1]]);
  });

  it('should find partial matches in title or tag', () => {
    const resultTitle = filterBySearchTerm(MOCKED_PRODUCTS, 'cool');

    expect(resultTitle).toEqual([MOCKED_PRODUCTS[0]]);
    const resultTag = filterBySearchTerm(MOCKED_PRODUCTS, 'hoo');

    expect(resultTag).toEqual([MOCKED_PRODUCTS[0]]);
  });

  it('should return products matching either title or tag', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS, 'merch');

    expect(result).toEqual([MOCKED_PRODUCTS[1], MOCKED_PRODUCTS[2]]);
  });

  it('should correctly handle null, undefined, or empty tags', () => {
    const resultTitle = filterBySearchTerm(MOCKED_PRODUCTS_WITH_MISSING_TAGS, 'mug');

    expect(resultTitle).toEqual([MOCKED_PRODUCTS_WITH_MISSING_TAGS[1]]);
    const resultTag = filterBySearchTerm(MOCKED_PRODUCTS_WITH_MISSING_TAGS, 'hoodie');

    expect(resultTag).toEqual([]);
  });

  it('should correctly handle blank string tags', () => {
    const result = filterBySearchTerm(MOCKED_PRODUCTS_WITH_BLANK_TAGS, 'hoodie');

    expect(result).toEqual([MOCKED_PRODUCTS_WITH_BLANK_TAGS[0]]);
  });
});

describe('filterByTypes', () => {
  it('should return all products if the types array is empty', () => {
    const result = filterByTypes(MOCKED_PRODUCTS, []);

    expect(result).toEqual(MOCKED_PRODUCTS);
  });

  it('should return an empty array if product list is empty', () => {
    const result = filterByTypes([], ['hoodie']);

    expect(result).toEqual([]);
  });

  it('should return an empty array if no product matches', () => {
    const result = filterByTypes(MOCKED_PRODUCTS, ['nonexistent']);

    expect(result).toEqual([]);
  });

  it('should filter by a single selected type', () => {
    const result = filterByTypes(MOCKED_PRODUCTS, ['hoodie']);

    expect(result).toEqual([MOCKED_PRODUCTS[0]]);
  });

  it('should filter by multiple types', () => {
    const result = filterByTypes(MOCKED_PRODUCTS, ['hoodie', 'cups']);

    expect(result).toEqual([MOCKED_PRODUCTS[0], MOCKED_PRODUCTS[1]]);
  });

  it('should be case-sensitive', () => {
    const result = filterByTypes(MOCKED_PRODUCTS, ['HOODIE']);

    expect(result).toEqual([]);
    const resultExact = filterByTypes(MOCKED_PRODUCTS, ['hoodie']);

    expect(resultExact).toEqual([MOCKED_PRODUCTS[0]]);
  });

  it('should correctly handle null, undefined, or empty tags', () => {
    const result = filterByTypes(MOCKED_PRODUCTS_WITH_MISSING_TAGS, ['t-shirts']);

    expect(result).toEqual([]);
  });

  it('should correctly filter by blank string tags if specified', () => {
    const resultBlank = filterByTypes(MOCKED_PRODUCTS_WITH_BLANK_TAGS, ['']);

    expect(resultBlank).toEqual([
      MOCKED_PRODUCTS_WITH_BLANK_TAGS[0],
      MOCKED_PRODUCTS_WITH_BLANK_TAGS[1],
    ]);
  });
});
