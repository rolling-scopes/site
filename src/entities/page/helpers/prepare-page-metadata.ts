import { PageResponse } from '@/entities/page/types';

type PageMetadata = {
  slug: string;
};

export function preparePageMetadata(response: PageResponse): PageMetadata[] {
  return response.items.map((page) => {
    const {
      fields: { slug },
    } = page;

    return { slug };
  });
}
