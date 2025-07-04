import { HttpStatus } from 'http-status';

import { ApiBaseClass } from '@/shared/api/api-base-class';
import { HTTP_METHOD } from '@/shared/constants';
import type { BaseEntry } from 'contentful';
import { LinkList } from 'data';

export type ListData = (string | LinkList)[] | [];
export type ListType = 'marked' | 'unmarked';

export type Language = 'en' | 'ru';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

export type ApiServices = {
  rest: ApiBaseClass;
  youtube: ApiBaseClass;
};

export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

export type QueryStringParams = Record<string, unknown>;

export type HttpHeaders = Record<string, string>;

export type RequestBody = RequestInit['body'];

export type RequestOptions = {
  method?: HttpMethod;
  params?: QueryStringParams;
  headers?: HttpHeaders;
  body?: RequestBody;
  rethrow?: boolean;
  shouldLog?: boolean;
};

export type HttpStatusCodes = HttpStatus[keyof HttpStatus];

type QueryResultSuccess<TResponse> = {
  isSuccess: true;
  result: TResponse;
};

type QueryResultError<TResponse> = {
  isSuccess: false;
  result: TResponse | null;
};

export type QueryResult<TResponse> = (
  | QueryResultSuccess<TResponse>
  | QueryResultError<TResponse>
) & {
  status: HttpStatusCodes;
  statusText?: string;
  responseHeaders?: Record<string, string>;
};

export type ApiResourceLocale = 'en-US' | 'ru';

/**
 * https://www.contentful.com/developers/docs/references/errors/
 */
export type ApiResponseError = {
  sys: {
    type: 'Error';
    id:
      | 'BadRequest'
      | 'InvalidQuery'
      | 'AccessTokenInvalid'
      | 'AccessDenied'
      | 'NotFound'
      | 'VersionMismatch'
      | 'ValidationFailed'
      | 'UnknownField'
      | 'InvalidEntry'
      | 'RateLimitExceeded'
      | 'ServerError'
      | 'Hibernated';
  };
  message: string;
  requestId: string;
};

export type ExtractSectionName<TContentType extends BaseEntry> =
  TContentType['sys']['contentType']['sys']['id'];
