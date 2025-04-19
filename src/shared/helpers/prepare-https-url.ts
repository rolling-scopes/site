export function prepareHttpsUrl<TUrl extends string>(url: TUrl): `https://${TUrl}` {
  const formattedUrl = (url.replaceAll('//', '') ?? '') as TUrl;

  return `https://${formattedUrl}`;
}
