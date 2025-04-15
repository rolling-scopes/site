import HTTP_STATUS, { HttpStatus } from 'http-status';
import isError from 'next/dist/lib/is-error';

import { HTTP_METHOD } from '@/shared/constants';
import { QueryResult, RequestOptions } from '@/shared/types';

export class ApiBaseClass {
  private readonly baseUrl: string;

  constructor(private readonly baseURI: string) {
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
    try {
      const res = await fetch(this.compileUrl(url), options);
      const data = (await res.json()) as TResponse;

      const status = res.status as HttpStatus[keyof HttpStatus];

      if (res.ok) {
        return {
          status,
          isSuccess: true,
          result: data,
        };
      }

      return {
        status,
        isSuccess: false,
        result: data,
      };
    } catch (e) {
      if (isError(e)) {
        console.error(`Something went wrong while querying data! (${e}). ${options}`);
      }

      return {
        status: HTTP_STATUS.SERVICE_UNAVAILABLE,
        isSuccess: false,
        result: null,
      };
    }
  }

  private compileUrl(url: string) {
    return `${this.baseUrl}${url}`;
  }
}
