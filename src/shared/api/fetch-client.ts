import { isValidUrl } from '@/shared/helpers/isValidUrl';
import { stringifyJSONSafe } from '@/shared/helpers/stringify-json-safe';
import {
  HttpHeaders,
  HttpMethod,
  HttpStatusCodes,
  QueryStringParams,
  RequestBody,
} from '@/shared/types';

export class FetchClient {
  public responseHeaders: Map<string, string> = new Map();
  public response?: Response;
  public method?: HttpMethod;
  public queryHeaders?: HttpHeaders;
  public status?: HttpStatusCodes;
  public queryBody?: RequestBody;
  public url?: string;
  public statusText?: string;

  constructor(
    private readonly baseUrl: string,
    private readonly staticHeaders: HttpHeaders = {},
  ) {}

  public async sendRequest(
    url: string,
    method: HttpMethod,
    body?: RequestBody,
    headers: HttpHeaders = {},
    params: QueryStringParams = {},
  ) {
    this.url = this.compileUrl(url, params);
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
      this.status = this.response?.status as HttpStatusCodes;
      this.statusText = (e as Error).message;

      this.responseHeaders.clear();
      this.prepareResponseHeaders();
    }
  }

  public json<TResponse>() {
    return this.response?.json() as Promise<TResponse>;
  }

  private prepareResponseHeaders() {
    const headersEntries = Array.from(this.response?.headers.entries() ?? []);

    headersEntries.forEach(([key, value]) => {
      this.responseHeaders.set(key.toLowerCase(), value);
    });
  }

  private ObjectToQueryString(params: QueryStringParams) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, param]) => {
      if (Array.isArray(param)) {
        param.forEach((value) => {
          searchParams.append(key, String(value));
        });
      } else {
        searchParams.append(key, String(param));
      }
    });

    return searchParams;
  }

  private compileUrl(url: string, params: QueryStringParams) {
    const buffer = [];
    const hasParams = Boolean(Object.keys(params).length);

    if (isValidUrl(url)) {
      // if url already contains http(s), direct url will be used
      buffer.push(url);
    } else {
      buffer.push(`${this.baseUrl}${url}`);
    }

    if (hasParams) {
      const queryString = this.ObjectToQueryString(params);

      buffer.push(queryString);
    }

    return buffer.join('?');
  }
}
