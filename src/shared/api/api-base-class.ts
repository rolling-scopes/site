import { FetchClient } from '@/shared/api/fetch-client';
import { HTTP_METHOD, UNKNOWN_API_ERROR } from '@/shared/constants';
import { isApiError } from '@/shared/helpers/is-api-error';
import { logRequest } from '@/shared/helpers/log-request';
import { HttpHeaders, HttpStatusCodes, QueryResult, RequestOptions } from '@/shared/types';

export class ApiBaseClass {
  private readonly baseUrl: string;

  constructor(
    private readonly baseURI: string,
    private readonly staticHeaders: HttpHeaders = {},
    private readonly logPrefix = 'CLI',
  ) {
    this.baseUrl = this.baseURI.replace(/\/$/, '');
  }

  public get<TResponse>(url: string, options: RequestOptions = {}) {
    return this.query<TResponse>(url, {
      ...options,
      method: HTTP_METHOD.GET,
    });
  }

  public post<TResponse>(url: string, options: RequestOptions = {}) {
    return this.query<TResponse>(url, {
      ...options,
      method: HTTP_METHOD.POST,
    });
  }

  public put<TResponse>(url: string, options: RequestOptions = {}) {
    return this.query<TResponse>(url, {
      ...options,
      method: HTTP_METHOD.PUT,
    });
  }

  public patch<TResponse>(url: string, options: RequestOptions = {}) {
    return this.query<TResponse>(url, {
      ...options,
      method: HTTP_METHOD.PATCH,
    });
  }

  public delete<TResponse>(url: string, options: RequestOptions = {}) {
    return this.query<TResponse>(url, {
      ...options,
      method: HTTP_METHOD.DELETE,
    });
  }

  private async query<TResponse>(
    url: string,
    options: RequestOptions = {},
  ): Promise<QueryResult<TResponse>> {
    const { body, method = HTTP_METHOD.GET, headers, params } = options;

    const fetchClient = new FetchClient(this.baseUrl, this.staticHeaders);

    try {
      await fetchClient.sendRequest(url, method, body, headers, params);
      const result = await fetchClient.json<TResponse>();
      const resultData = {
        status: fetchClient?.status as HttpStatusCodes,
        result,
      };

      if (!fetchClient.response?.ok) {
        throw new Error(isApiError(result) ? result.message : UNKNOWN_API_ERROR);
      }

      if (!options.nolog) {
        logRequest({
          method,
          url: fetchClient.url ?? url,
          result,
          body,
          status: fetchClient.status as HttpStatusCodes,
          statusText: fetchClient.statusText,
          logPrefix: this.logPrefix,
        });
      }

      return {
        ...resultData,
        isSuccess: true,
      };
    } catch (e) {
      logRequest({
        method,
        url: fetchClient.url ?? url,
        result: null,
        body,
        status: fetchClient.status as HttpStatusCodes,
        statusText: (e as Error).message ?? fetchClient.statusText,
        logPrefix: this.logPrefix,
        error: e,
      });

      return {
        status: fetchClient.status as HttpStatusCodes,
        isSuccess: false,
        result: null,
      };
    }
  }
}
