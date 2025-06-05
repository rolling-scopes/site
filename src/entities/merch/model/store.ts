import { transformMerchCatalog } from '../helpers/transform-merch-catalog';
import { api } from '@/shared/api/api';

class MerchStore {
  public loadMerchCatalog = async () => {
    const res = await api.merch.queryMerchCatalog();

    if (res.isSuccess) {
      return transformMerchCatalog(res.result);
    }

    throw new Error('Error while loading merch catalog.');
  };
}

export const merchStore = new MerchStore();
