import { HttpStatus } from 'http-status';

import { ApiBaseClass } from '@/shared/api/api-base-class';
import { HTTP_METHOD } from '@/shared/constants';
import { LinkList } from '@/widgets/required/types';

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
};

export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

export type RequestOptions = {
  method?: HttpMethod;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  headers?: Record<string, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  rethrow?: boolean;
  nolog?: boolean;
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

export type Locale = 'en-US';
