import { ApiMerchItem, ApiMerchItemAdapt, ApiMerchResponse, MerchProduct } from '../types';

export const adaptMerchData = (data: ApiMerchResponse): MerchProduct[] => {
  const products: MerchProduct[] = [];

  const processCategory = (category: ApiMerchItemAdapt, parentTags: string[]) => {
    for (const [key, value] of Object.entries(category)) {
      if (isApiMerchItem(value)) {
        products.push({
          name: key,
          title: value.name,
          preview: value.preview,
          download: value.download,
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
