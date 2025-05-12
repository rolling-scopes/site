import { MerchApi } from '@/entities/merch/api/merch-api';
import { TrainerApi } from '@/entities/trainer/api/trainer-api';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;

  public readonly merch: MerchApi;

  constructor(private readonly baseURI: string) {
    this.services = { rest: new ApiBaseClass(this.baseURI) };

    this.trainer = new TrainerApi(this.services);

    this.merch = new MerchApi(this.services);
  }
}
