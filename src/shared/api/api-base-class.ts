import { FetchClient } from '@/shared/api/fetch-client';
import { HTTP_METHOD } from '@/shared/constants';
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

      if (!options.nolog) {
        logRequest({
          method,
          url,
          result,
          body,
          status: fetchClient.status as HttpStatusCodes,
          statusText: fetchClient.statusText as string,
          logPrefix: this.logPrefix,
        });
      }

      if (fetchClient.response?.ok) {
        return {
          ...resultData,
          isSuccess: true,
        };
      }

      return {
        ...resultData,
        isSuccess: false,
      };
    } catch (e) {
      logRequest({
        method,
        url,
        result: null,
        body,
        status: fetchClient.status as HttpStatusCodes,
        statusText: fetchClient.statusText as string,
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
