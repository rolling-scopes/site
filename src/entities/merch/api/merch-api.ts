import { MerchResponse } from '../types';
import { ApiServices } from '@/shared/types';

export class MerchApi {
  constructor(private readonly services: ApiServices) {}

  public queryMerchCatalog() {
    return this.services.rest.get<MerchResponse>(`/merch/filelist.json`);
  }
}
