import { MerchProduct } from '@/entities/merch';

export type MerchFilterProps = {
  allTags: string[];
};

export type MerchProductsProps = {
  initialProducts: MerchProduct[];
};
