import { transformMerchCatalog } from '../helpers/transform-merch-catalog';
import { MerchProduct } from '../types';
import { api } from '@/shared/api/api';

class MerchStore {
  private cachedProducts: MerchProduct[] | null = null;
  public loadMerchCatalog = async () => {
    if (this.cachedProducts) {
      return this.cachedProducts;
    }

    const res = await api.merch.queryMerchCatalog();

    if (res.isSuccess) {
      this.cachedProducts = transformMerchCatalog(res.result);
      return this.cachedProducts;
    }

    throw new Error('Error while loading merch catalog.');
  };
}

export const merchStore = new MerchStore();
