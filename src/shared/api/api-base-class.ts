import { HTTP_METHOD, UNKNOWN_API_ERROR } from '@/shared/constants';
import { isApiError } from '@/shared/helpers/is-api-error';
import { isValidUrl } from '@/shared/helpers/isValidUrl';
import { logRequest } from '@/shared/helpers/log-request';
import { stringifyJSONSafe } from '@/shared/helpers/stringify-json-safe';
import {
  HttpHeaders,
  HttpStatusCodes,
  QueryResult,
  QueryStringParams,
  RequestOptions,
} from '@/shared/types';

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
    { method = HTTP_METHOD.GET, body, headers, params, nolog }: RequestOptions = {},
  ): Promise<QueryResult<TResponse>> {
    const compiledUrl = this.compileUrl(url, params);
    const queryHeaders = {
      ...this.staticHeaders,
      ...headers,
    };

    let response = {} as Response;
    let result = {} as TResponse;
    let queryBody: string | null = null;
    let error: unknown | null = null;

    if (body) {
      queryBody = stringifyJSONSafe(body);
    }

    try {
      response = await fetch(compiledUrl, {
        method,
        headers: queryHeaders,
        body: queryBody,
      });
      result = await response.json();

      if (!response.ok) {
        throw new Error(isApiError(result) ? result.message : UNKNOWN_API_ERROR);
      }

      return {
        isSuccess: true,
        status: response.status as HttpStatusCodes,
        result,
      };
    } catch (e) {
      error = e;

      return {
        isSuccess: false,
        status: response.status as HttpStatusCodes,
        result: null,
      };
    } finally {
      if (!nolog) {
        logRequest({
          method,
          url: compiledUrl,
          result,
          body,
          status: response.status,
          statusText: response.statusText,
          logPrefix: this.logPrefix,
          error,
        });
      }
    }
  }

  private compileUrl(url: string, params: QueryStringParams = {}) {
    const queryString = new URLSearchParams(params as Record<string, string>);
    const urlWithQueryString = `${url}?${queryString}`;
    const baseUrl = !isValidUrl(url) ? this.baseUrl : '';

    return new URL(urlWithQueryString, baseUrl).toString();
  }
}
