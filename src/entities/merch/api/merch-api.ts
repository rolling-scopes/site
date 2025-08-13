import { adaptMerchData } from '../helpers/adapt-merch-data';
import { ApiMerchResponse, MerchProduct } from '../types';

let cache: MerchProduct[] | null = null;

export const getMerchData = async () => {
  if (cache) {
    return cache;
  }

  try {
    if (!process.env.MERCH_URL) {
      throw new Error('MERCH_URL is not defined in the environment variables');
    }
    const data = await fetch(process.env.MERCH_URL);

    if (!data.ok) {
      throw new Error(`HTTP ${data.status}: ${data.statusText}`);
    }

    const merch = (await data.json()) as ApiMerchResponse;

    cache = adaptMerchData(merch);

    return cache;
  } catch (e) {
    throw new Error(`Something went wrong fetching merch data! (${e})`);
  }
};
