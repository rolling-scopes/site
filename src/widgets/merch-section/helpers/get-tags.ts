import { MerchProduct } from '@/entities/merch';

export const getTags = (products: MerchProduct[] | []): string[] | [] => {
  const allTags: string[] | [] = products
    .flatMap((product) => product.tags ?? [])
    .filter((tag) => tag.length);
  const tags: string[] | [] = Array.from(new Set(allTags)).sort();

  return tags;
};
