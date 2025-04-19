import { ApiResponseError } from '@/shared/types';

export const isApiError = (e: unknown): e is ApiResponseError => {
  return <boolean>(
    (e
      && typeof e === 'object'
      && 'sys' in e
      && e.sys
      && typeof e.sys === 'object'
      && 'type' in e.sys
      && e.sys.type === 'Error')
  );
};
