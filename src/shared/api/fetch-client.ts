import HTTP_STATUS from 'http-status';

import { stringifyJSONSafe } from '@/shared/helpers/stringify-json-safe';
import { HttpMethod, HttpStatusCodes } from '@/shared/types';

export class FetchClient {
  public response?: Response;
  public url?: string;
  public method?: HttpMethod;
  public queryBody?: string;
  public queryHeaders?: Record<string, string>;
  public responseHeaders: Map<string, string> = new Map();
  public status?: HttpStatusCodes;
  public statusText?: string;

  constructor(
    private readonly baseUrl: string,
    private readonly staticHeaders: Record<string, string> = {},
  ) {}

  public async sendRequest(
    url: string,
    method: HttpMethod,
    headers: Record<string, string> = {},
    body?: unknown,
  ) {
    this.url = this.compileUrl(url);
    this.method = method;

    this.queryHeaders = {
      ...headers,
      ...this.staticHeaders,
    };

    if (body) {
      this.queryBody = stringifyJSONSafe(body);
    }

    try {
      this.response = await fetch(this.url, {
        method: this.method,
        headers: this.queryHeaders,
        body: this.queryBody,
      });

      this.status = this.response.status as HttpStatusCodes;

      this.responseHeaders.clear();
      this.prepareResponseHeaders();

      return this.response;
    } catch (e) {
      this.status = HTTP_STATUS.INTERNAL_SERVER_ERROR;
      this.statusText = (e as Error).message;

      this.responseHeaders.clear();
      this.prepareResponseHeaders();
    }
  }

  public json<TResponse>() {
    return this.response?.json() as Promise<TResponse>;
  }

  private prepareResponseHeaders() {
    const headersEntries = this.response?.headers.entries() ?? [];

    headersEntries.forEach(([key, value]) => {
      this.responseHeaders.set(key.toLowerCase(), value);
    });
  }

  private compileUrl(url: string) {
    return `${this.baseUrl}${url}`;
  }
}
