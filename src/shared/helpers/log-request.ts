import util from 'node:util';

import { stringifyJSONSafe } from '@/shared/helpers/stringify-json-safe';
import { HttpMethod } from '@/shared/types';

const MESSAGE_LENGTH = 100;

type LogRequestParams = {
  method: HttpMethod;
  url: string;
  result: unknown;
  body: unknown;
  status: number;
  statusText?: string;
  logPrefix: string;
  error?: unknown | Error;
};

export function logRequest({
  logPrefix,
  statusText = '',
  status,
  result,
  method,
  url,
  body,
  error,
}: LogRequestParams) {
  if (!process.env.LOG_QUERY) {
    return;
  }

  const loggerPrefix = `{logger:query:${logPrefix}}`;
  const logObject: Record<string, string | number | object> = {
    loggerPrefix,
    shortText: `${method} => ${url} => ${status} (${statusText})`.replace(' ()', ''),
    status,
    statusText,
  };

  const responseJSON = stringifyJSONSafe(result, null, 2);
  const isLongResponse = responseJSON.length > MESSAGE_LENGTH;
  const slicedResponse = `${responseJSON.slice(0, MESSAGE_LENGTH)}...`;

  logObject['response'] = isLongResponse ? slicedResponse : responseJSON;

  if (body) {
    const bodyJSON = stringifyJSONSafe(body);
    const isLongBody = bodyJSON.length > MESSAGE_LENGTH;
    const slicedBody = `${bodyJSON.slice(0, MESSAGE_LENGTH)}...`;

    logObject['body'] = isLongBody ? slicedBody : slicedBody;
  }

  if (error) {
    logObject['stack'] = (error as Error).stack ?? '';
  }

  console.log(
    util.inspect(logObject, {
      depth: null,
      colors: process.env.NODE_ENV !== 'production',
    }),
  );
}
