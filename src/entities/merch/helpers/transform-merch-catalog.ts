import { ApiMerchItem, ApiMerchItemAdapt, MerchProduct, MerchResponse } from '../types';

export const transformMerchCatalog = (data: MerchResponse): MerchProduct[] => {
  const products: MerchProduct[] = [];
  const baseUrl = process.env.NEXT_PUBLIC_RS_APP_API_BASE_URL || '';

  if (!baseUrl) {
    console.warn('NEXT_PUBLIC_RS_APP_API_BASE_URL is not defined. URLs will be relative.');
  }
  let index = 0;

  const processCategory = (category: ApiMerchItemAdapt, parentTags: string[]) => {
    for (const [key, value] of Object.entries(category)) {
      if (isApiMerchItem(value)) {
        index += 1;
        products.push({
          id: index,
          name: key,
          title: value.name,
          preview: value.preview.map((path) => `${baseUrl}/${path}`),
          download: value.download.map((path) => `${baseUrl}/${path}`),
          tags: parentTags,
        });
      } else {
        processCategory(value, [...parentTags, key]);
      }
    }
  };

  for (const [categoryName, categoryData] of Object.entries(data)) {
    processCategory(categoryData, [categoryName]);
  }

  return products;
};

const isApiMerchItem = (item: unknown): item is ApiMerchItem => {
  return Boolean(
    item && typeof item === 'object' && 'name' in item && 'preview' in item && 'download' in item,
  );
};
