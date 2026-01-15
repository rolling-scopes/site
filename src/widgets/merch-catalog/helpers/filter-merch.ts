import { MerchProduct } from '@/entities/merch/types';

export const filterBySearchTerm = (
  products: MerchProduct[],
  searchTerm: string,
): MerchProduct[] => {
  if (!searchTerm) {
    return products;
  }

  return products.filter((product) => {
    const tags = product.tags ?? [];
    const titleMatch = product.title.toLowerCase().includes(searchTerm);
    const tagsMatch = tags.some((tag) => tag.toLowerCase().includes(searchTerm));

    return titleMatch || tagsMatch;
  });
};

export const filterByTypes = (products: MerchProduct[], types: string[]): MerchProduct[] => {
  if (!types.length) {
    return products;
  }

  return products.filter((product) => {
    const tags = product.tags ?? [];
    const typesMatch = types.some((type) => tags.includes(type));

    return typesMatch;
  });
};
