import { TrainerApi } from '@/entities/trainer/api/trainer-api';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;

  constructor(private readonly baseURI: string) {
    this.services = { rest: new ApiBaseClass(this.baseURI) };

    this.trainer = new TrainerApi(this.services);
  }
}

export const api = new Api(process.env.API_BASE_URL);
