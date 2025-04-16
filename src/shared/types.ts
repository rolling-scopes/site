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

export type QueryStringParams = Record<string, unknown>;

export type HttpHeaders = Record<string, string>;

export type RequestBody = RequestInit['body'];

export type RequestOptions = {
  method?: HttpMethod;
  params?: QueryStringParams;
  headers?: HttpHeaders;
  body?: RequestBody;
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

export type Locale = 'en-US' | 'ru';

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

/**
 * https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/common-resource-attributes
 */
type ApiCommonRecourseAttribute = {
  space: ApiResourceLinkAttribute<'Space'>;
  environment: ApiResourceLinkAttribute<'Environment'>;
  type: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedVersion: number;
  revision: number;
};

type ApiLinkType = 'Space' | 'Asset' | 'Entry' | 'Environment' | 'ContentType';

export type ApiResourceLinkAttribute<TLinkType extends ApiLinkType> = {
  sys: {
    type: 'Link';
    linkType: TLinkType;
    id: string;
  };
};

export type ApiResourceEntry = ApiCommonRecourseAttribute & {
  type: 'Entry';
  contentType: ApiResourceLinkAttribute<'ContentType'>;
  locale: Locale;
};

export type ApiResourceAsset = ApiCommonRecourseAttribute & {
  type: 'Asset';
  locale: Locale;
  firstPublishedAt: string;
  publishedAt: string;
};

/**
 * https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/assets
 */
export type ApiAsset = {
  title: string;
  description: string;
  file: ApiAssetFile;
};

export type ApiAssetFile = {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
};

export type ApiMetadata = {
  tags: string[];
  concepts: string[];
};

/**
 * https://www.contentful.com/developers/docs/references/content-preview-api/#/introduction/collection-resources-and-pagination
 */
export type ApiResponse<
  TItems extends Array<unknown>,
  UIncludes extends Record<string, unknown>,
> = {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: TItems;
  includes: UIncludes;
};
