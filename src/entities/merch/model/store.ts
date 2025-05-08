import { transformMerchCatalog } from '../helpers/transform-merch-catalog';
import { api } from '@/shared/api/api';

class MerchStore {
  public loadMerchCatalog = async () => {
    try {
      const res = await api.merch.queryMerchCatalog();

      if (res.isSuccess) {
        return transformMerchCatalog(res.result);
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export const merchStore = new MerchStore();
