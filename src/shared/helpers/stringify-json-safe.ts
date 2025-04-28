type Replacer = Parameters<typeof JSON.stringify>['1'];
type Space = Parameters<typeof JSON.stringify>['2'];

export function stringifyJSONSafe(data: unknown, replacer?: Replacer, space?: Space) {
  return typeof data === 'string' ? data : JSON.stringify(data, replacer, space);
}
